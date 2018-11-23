import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-alarm-notification',
  templateUrl: './alarm-notification.component.html',
  styleUrls: ['./alarm-notification.component.css']
})
export class AlarmNotificationComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  constructor() { }

  ngOnInit() {
  }

}
