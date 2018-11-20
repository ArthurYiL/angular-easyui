import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {
    dataSource = [];

    constructor() {
        for (let i = 1; i <= 10000; i++) {
            this.dataSource.push({
                id: 'Id' + i,
                name: 'Item' + i
            });
        }
    }

    getData(term: string, pageNumber: number, pageSize: number) {
        term = (term || '').trim();
        let data = this.dataSource.filter(row => row.name.toLowerCase().indexOf(term.toLowerCase()) != -1);
        let start = (pageNumber - 1) * pageSize;
        let rows = data.slice(start, start + pageSize);
        return Observable.of({
            total: data.length,
            pageNumber: pageNumber,
            pageSize: pageSize,
            rows: rows
        });
    }
}