import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private jsonp: Jsonp) { }

    getData(term: string) {
        let url = 'http://gd.geobytes.com/AutoCompleteCity?callback=JSONP_CALLBACK';
        url += '&q=' + term;
        return this.jsonp.get(url)
            .map(response => {
                let data = response.json().filter((item) => item.trim());
                if (data.length) {
                    return data.map((item) => {
                        return { value: item, text: item };
                    });
                } else {
                    return null;
                }
            });
    }
}
