import {Component, OnInit} from '@angular/core';
import {ApiService} from "../common/services/api.service";
import {Force} from "../common/models/force";

@Component({
    selector: 'pdb-examples-page',
    templateUrl: './examples-page.component.html',
    styleUrls: ['./examples-page.component.css']
})
export class ExamplesPageComponent implements OnInit {

    private listOfForces: Force[];
    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.getListOfForces().subscribe(
            (result: Force[]) => {
                this.listOfForces = result;
                console.log(result)
            },
            (error) => { console.log(error)},
            () => { }
        );
    }

}
