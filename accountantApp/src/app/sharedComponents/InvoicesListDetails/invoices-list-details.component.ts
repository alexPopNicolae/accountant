import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { InvoicesClientsService } from "../../services/invoicesclients.service";

@Component({
    selector:'app-invoice-list-details',
    templateUrl:'./invoices-list-details.component.html',
    styleUrls:['./invoices-list-details.component.scss']
})
export class InvoicesListDetalsComponent implements OnInit, OnChanges{ 

    constructor(private invoiceClientsService:InvoicesClientsService) {}

    @Input() public headerId;
    public details;

    ngOnInit(): void {
        console.log("Asta e ceea ce vine din exterior");
        console.log(this.headerId);
    }
    ngOnChanges():void {
        this.details = this.invoiceClientsService.getInvoiceDetails(this.headerId);
    }
}