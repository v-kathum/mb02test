import { Component, OnInit, EventEmitter } from '@angular/core';
import 'materialize-css';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-alarm-modals',
  templateUrl: './alarm-modals.component.html',
  styleUrls: ['./alarm-modals.component.css']
})
export class AlarmModalsComponent implements OnInit {

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
