import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-invoices-list',
    templateUrl:'./invoices.component.html',
    styleUrls:['./invoices.component.scss']
})
export class InvoicesList implements OnInit{
    @Input() public list;
    @Output() public getDetailsHandler:EventEmitter<any> = new EventEmitter();;

    public ngOnInit(): void {
        console.log("Asta e ceea ce vinde din exterior");
        console.log(this.list);
    }

    public handleClick(id) {
        this.getDetailsHandler.emit(id);
    }
}