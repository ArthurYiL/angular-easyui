import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getData() {
        return [
            {
                "id": 1, "name": "All Tasks", "begin": "3/4/2017", "end": "3/20/2017", "progress": 60, "iconCls": "icon-ok",
                "children": [
                    {
                        "id": 2, "name": "Designing", "begin": "3/4/2017", "end": "3/10/2017", "progress": 100, "state": "closed",
                        "children": [
                            { "id": 21, "name": "Database", "persons": 23, "begin": "3/4/2017", "end": "3/6/2017", "progress": 100 },
                            { "id": 22, "name": "UML", "persons": 12, "begin": "3/7/2017", "end": "3/8/2017", "progress": 100 },
                            { "id": 23, "name": "Export Document", "persons": 13, "begin": "3/9/2017", "end": "3/10/2017", "progress": 100 },
                        ]
                    },
                    { "id": 3, "name": "Coding", "persons": 21, "begin": "3/11/2017", "end": "3/18/2017", "progress": 80 },
                    { "id": 4, "name": "Testing", "persons": 18, "begin": "3/19/2017", "end": "3/20/2017", "progress": 20 }
                ]
            }
        ]
    }

}