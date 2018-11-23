import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    configUrl = 'assets/first-day-of-week/first-day-of-week.json';

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get(this.configUrl);
    }

}
