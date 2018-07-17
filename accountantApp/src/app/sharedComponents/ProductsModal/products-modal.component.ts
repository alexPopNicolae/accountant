import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent {
  @Input() visible;
  @Input() title;
  @Output() closeModalHandler: EventEmitter<any> = new EventEmitter();

  closeModal() {
    this.closeModalHandler.emit();
  }
}
