import { Component, OnInit } from "@angular/core";
import { InvoicesService } from "../../services/invoices.service";

@Component({
    selector:'app-invoices',
    templateUrl:'invoices.component.html',
    styleUrls:['./invoices.component.scss']
  
})
export class InvoicesComponent implements OnInit{
    constructor(private invoicesServices:InvoicesService){}

    public invoices;

    ngOnInit(): void {
        console.log('Astea sunt invoiceruile care vin');
        console.log(this.invoicesServices.getInvoices());
        this.invoices = this.invoicesServices.getInvoices();
    }

}