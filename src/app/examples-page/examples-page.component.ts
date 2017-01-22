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
            (result) => {
                this.listOfForces = result.json();
                console.log(this.listOfForces)
            },
            (error) => { console.log(error.json())},
            () => { }
        );
    }

}
