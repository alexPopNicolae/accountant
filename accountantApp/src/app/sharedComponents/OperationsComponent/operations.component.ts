import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  @Output() handleAddElement: EventEmitter<any> = new EventEmitter();
  @Output() handleEditElement: EventEmitter<any> = new EventEmitter();
  @Output() handleDeleteElement: EventEmitter<any> = new EventEmitter();

  handleAddClick() {
    this.handleAddElement.emit('Ai dat click pe butonul de add');
  }
  handleEditClick() {
    this.handleEditElement.emit('Ai dat click pe butonul de edit');
  }
  handleDeleteClick() {
    this.handleEditElement.emit('Ai dat click pe butonul de delete');
  }
}
