import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'dy1',
    template: `
        <eui-datagrid style="height:250px"
                [pagination]="true"
                [data]="data"
                [total]="total"
                [pageNumber]="pageNumber"
                [pageSize]="pageSize">
            <eui-grid-column field="inv" title="Inv No"></eui-grid-column>
            <eui-grid-column field="name" title="Name"></eui-grid-column>
            <eui-grid-column field="amount" title="Amount" align="right"></eui-grid-column>
            <eui-grid-column field="price" title="Price" align="right"></eui-grid-column>
            <eui-grid-column field="cost" title="Cost" align="right"></eui-grid-column>
            <eui-grid-column field="note" title="Note"></eui-grid-column>
        </eui-datagrid>
    `,
    providers: [DataService],
    host: {
        'class': 'f-column f-full'
    }
})
export class Dy1Component {
    total: number = 0;
    pageNumber = 1;
    pageSize = 20;
    data = [];

    constructor(public dataService: DataService) { }

    ngAfterViewInit() {
        this.dataService.getData().subscribe((data) => {
            this.total = data.total;
            this.data = data.rows;
        });
    }

}