import { Injectable } from "@angular/core";

@Injectable()
export class InvoicesClientsService {
    invoices = [
        { id: 1, client: 'Acme 1', details: 'Asta este factura numarul 1' },
        { id: 2, client: 'Acme 2', details: 'Asta este factura numarul 2' },
        { id: 3, client: 'Acme 3', details: 'Asta este factura numarul 3' },
        { id: 4, client: 'Acme 4', details: 'Asta este factura numarul 4' },
        { id: 5, client: 'Acme 5', details: 'Asta este factura numarul 5' },
    ];

    public getAllInvoicesHeader() {
        const invoicesHeader = this.invoices.map(invoice => {
            const header = {
                id: invoice.id,
                client: invoice.client
            };
            return header;
        });
        return invoicesHeader;
    }

    public getInvoiceDetails(id) {
        if (id !== undefined) {
            const details = this.invoices.filter(item => {
                return item.id == id;
            });
            return details[0].details;
        }
    }
}