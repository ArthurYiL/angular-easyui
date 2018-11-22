import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {
    nodes: any[] = [{
        "id": 1,
        "text": "My Documents",
        "children": [{
            "id": 11,
            "text": "Photos",
            "state": "closed"
        }, {
            "id": 12,
            "text": "Program Files",
            "state": "closed"
        }, {
            "id": 13,
            "text": "index.html"
        }, {
            "id": 14,
            "text": "about.html"
        }, {
            "id": 15,
            "text": "welcome.html"
        }]
    }];

    photos: any[] = [{
        "id": 111,
        "text": "Friend"
    }, {
        "id": 112,
        "text": "Wife"
    }, {
        "id": 113,
        "text": "Company"
    }];

    programs: any[] = [{
        "id": 121,
        "text": "Intel"
    }, {
        "id": 122,
        "text": "Java"
    }, {
        "id": 123,
        "text": "Microsoft Office"
    }, {
        "id": 124,
        "text": "Games"
    }];

    getNodes(node: any = null) {
        if (!node) {
            return Observable.of(this.nodes);
        }
        if (node.id == 11) {
            return Observable.of(this.photos).delay(1000);
        } else if (node.id == 12) {
            return Observable.of(this.programs).delay(1000);
        }
    }

}
