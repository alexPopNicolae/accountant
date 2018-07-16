import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesList {
  @Input() public list;
  @Output() public getDetailsHandler: EventEmitter<any> = new EventEmitter();

  public handleClick(id) {
    this.getDetailsHandler.emit(id);
  }
}
