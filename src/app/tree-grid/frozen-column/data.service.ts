import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getData() {
        return [
            {
                "id": 1, "region": "Wyoming", "children": [
                    { "id": 11, "region": "Albin", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 },
                    { "id": 12, "region": "Canon", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 },
                    { "id": 13, "region": "Egbert", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 }
                ]
            },
            {
                "id": 2, "region": "Washington", "children": [
                    { "id": 21, "region": "Bellingham", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 },
                    { "id": 22, "region": "Chehalis", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 },
                    { "id": 23, "region": "Ellensburg", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 },
                    { "id": 24, "region": "Monroe", "f1": 2000, "f2": 1800, "f3": 1903, "f4": 2183, "f5": 2133, "f6": 1923, "f7": 2018, "f8": 1838 }
                ]
            }
        ];
    }
}
