import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { InvoicesClientsService } from '../../services/invoicesclients.service';

@Component({
  selector: 'app-invoice-list-details',
  templateUrl: './invoices-list-details.component.html',
  styleUrls: ['./invoices-list-details.component.scss']
})
export class InvoicesListDetalsComponent implements OnChanges {
  constructor(private invoiceClientsService: InvoicesClientsService) {}

  @Input() public headerId;
  public details;
  ngOnChanges(): void {
    this.details = this.invoiceClientsService.getInvoiceDetails(this.headerId);
  }
}
