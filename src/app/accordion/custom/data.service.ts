import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    configUrl = 'assets/accordion/custom.json';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.configUrl);
    }

}
