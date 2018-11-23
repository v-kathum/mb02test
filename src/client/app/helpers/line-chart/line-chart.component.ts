
import { Component, ElementRef, Input, ViewChild, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { TelemetryType, getSensorType } from '../../model/telemetry-type';
import { Colors, shadeColor } from '../../app-colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})

export class LineChartComponent {

  @Input() type: string; // T, H, L, M
  @Input() labels: string[];
  @Input() chartData: number[];
  @Input() minData: number[];
  @Input() maxData: number[];
  private sensorType: TelemetryType;
  private chart: Chart;


    getAverageLineDataset(color: string, title: string | undefined, lineLevel: number, length: number) {

      let lineData: number[] = Array(length).fill(lineLevel);
      let dataset = {
          borderColor: color,
          data: lineData,
          borderDash: [10],
          borderDashOffset: 4,
          pointRadius: 0,
          borderWidth: 2,
          backgroundColor: 'rgba(0,0,0,0)'
        };
      if (title) {
        dataset['label'] = title;
      }
      return dataset;
    }

    createChart(context) {
      let options: Object = {
        legend: {
          display: true,
          labels: {
            filter: function (item, data) {
              return item.text;
            }
          }
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: this.sensorType.getAxisLabel()
            },
            ticks: {
              suggestedMin: this.sensorType.suggestedMin(), // minimum will be 0, unless there is a lower value.
              suggestedMax: this.sensorType.suggestedMax()
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }]
        }
      };

      let datasets: Object[] = this.buildDatasets();

      this.chart = new Chart(context, { type: 'line', data: { labels: this.labels, datasets: datasets }, options: options });
    }


    private buildDatasets(): Object[] {
      let color: string = this.sensorType.color();
      let datasets: Object[] = [];

      if (this.minData) {
        console.log('min ' + this.minData);
        datasets.push({
          label: "Lower",
          borderColor: shadeColor(color, 0.5),
          backgroundColor: shadeColor(color, 0.5),
          fill: false,
          data: this.minData,
          pointRadius: 0
        });
      }

      // chart data
      datasets.push({
        label: this.sensorType.title(),
        borderColor: color,
        backgroundColor: color,
        fill: false,
        data: this.chartData,
        pointRadius: this.minData ? 0 : 3
      });

      if (this.maxData) {
        datasets.push({
          label: 'Upper',
          borderColor: shadeColor(color, 0.5),
          backgroundColor: shadeColor(color, 0.5),
          fill: false,
          data: this.maxData,
          pointRadius: 0
        });
      }

      // generate dotted line lable
      // amber
      let amberLines: number[] = this.sensorType.amberLines();
      if (amberLines) {
        let first: boolean = true;
        for (let amberLevel of amberLines) {
          datasets.push(
            this.getAverageLineDataset(
              Colors.AMBER,
              first? 'Amber alert' : null,
              amberLevel,
              this.chartData.length));
          first = false;
        }
      }

      // red
      let redLines: number[] = this.sensorType.redLines();
      if (redLines) {
        let first: boolean = true;
        for (const redLevel of redLines) {
          datasets.push(
            this.getAverageLineDataset(
              Colors.DANGER,
              first ? 'Red alert' : null,
              redLevel,
              this.chartData.length));
          first = false;
         }
      }
      return datasets;
    }
   /**
    * Helper function to build the line chart
    * @param labels
    * @param chartData
    */
    updateChartData() {

      const datasets: Object[] = this.buildDatasets();
      this.chart.data.labels = this.labels;
      this.chart.data.datasets = datasets;

      this.chart.update();
    }

    @ViewChild('canvas') canvasRef: ElementRef;
    private canvas: any;

    constructor() {
    }

    ngOnInit() {
      this.sensorType = getSensorType(this.type);
    }

    ngAfterViewInit() {
      this.updateCanvas();
    }

    ngOnChanges(changes: SimpleChanges) {
      this.updateCanvas();
    }

    updateCanvas() {

      if (this.labels && this.chartData && this.sensorType) {

        this.canvas = this.canvasRef.nativeElement;

        // build chart if context available
        if (!this.chart && this.canvas.getContext) {
          const context = this.canvas.getContext('2d');
          this.createChart(context);
        }

        if (this.chart) {
          this.updateChartData();
        }

      }

    }

    public get title(): string {
      return this.sensorType.title();
    }

}
