import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Force} from "../models/force";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ApiService {

    private listOfForcesEndpoint: string = "https://data.police.uk/api/forces";
    constructor(private http: Http) {
    }

    getListOfForces() : Observable<Force[]> {
        return this.http.get(this.listOfForcesEndpoint).map(this.processData).catch(this.handleError);
    }

    protected processData<T>(response: Response): Observable<T> {
        let result = null;
        if(!response.ok) {
            console.error('Response status: ' + response.status);
        }

        try {
            result = (response.json() || {})
        } catch (e) {
            return result;
        }

        return result;
    }

    protected  handleError<T>(response: Response): Observable<T> {
        let result = null;
        if(!response.ok) {
            console.error('Response status: ' + response.status);
        }

        try {
            result = (response.json() || {})
        } catch (e) {
            return result;
        }

        return result;
    }
}
