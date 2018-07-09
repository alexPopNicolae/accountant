import { Injectable } from "@angular/core";

@Injectable()
export class InvoicesService {
    invoices = [
        {
            id:1,
            to:'Acme Communications 1',
            details:'This client is very important'
        },
        {
            id:2,
            to:'Acme Communicaations 2',
            details:'This client is also very importan'
        },
        {
            id:3,
            to:'Acme Communications 3',
            details:'This client is the most important of all'
        },
        {
            id:4,
            to:'Acme Communications 4',
            details:'This client is the most important of most important of all'
        }
    ];

    public getInvoices() {
        return this.invoices;
    }

    public getInvoiceById(id) {
        var foundInvoice = this.invoices.find((invoice)=> {
                return invoice.id == id;
            });
       return foundInvoice;     
    }
}

