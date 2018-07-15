import { Component, OnInit } from "@angular/core";
import { InvoicesClientsService } from "../../services/invoicesclients.service";

@Component({
    selector:'./app-invoices-clients',
    templateUrl:'./invoices-clients.component.html',
    styleUrls:['./invoices-clients.component.scss']
})
export class InvoicesClientsComponent implements OnInit{
    constructor(private invoicesClientService:InvoicesClientsService){}

    invoicesHeader;
    visibleBillId;

    public ngOnInit(): void {
        this.invoicesHeader = this.invoicesClientService.getAllInvoicesHeader();
    }

    public getDetails(id) {
        this.visibleBillId = id;
    }
}