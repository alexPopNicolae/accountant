import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { InvoicesService } from "../../services/invoices.service";

@Component({
    selector:'app-invoice-details-component',
    templateUrl:'./invoice-details.component.html',
    styleUrls:['./invoice-details.component.scss']
})
export class InvoiceDetails implements OnInit {
    constructor(private route:ActivatedRoute, private invoiceService:InvoicesService){}

    details

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.details = this.invoiceService.getInvoiceById(id);
        console.log('Detaliile despre factura aceasta sunt: ');
        console.log(this.details);
        
    }
}