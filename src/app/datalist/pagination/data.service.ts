import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService {

    getData(): any {
        let total = 1000;
        let data = [];
        for (let i = 1; i <= total; i++) {
            let amount = Math.floor(Math.random() * 1000);
            let price = Math.floor(Math.random() * 1000);
            data.push({
                inv: 'Inv No ' + i,
                name: 'Name ' + i,
                amount: amount,
                price: price,
                cost: amount * price,
                note: 'Note ' + i
            });
        }
        return Observable.of({
            total: total,
            rows: data
        });
    }
}