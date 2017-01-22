import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Force} from "../models/force";

@Injectable()
export class ApiService {

    private listOfForcesEndpoint: string = "https://data.police.uk/api/forces";
    constructor(private http: Http) {
    }

    getListOfForces() : Observable<any> {
        return this.http.get(this.listOfForcesEndpoint);
    }
}
