import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Force} from "../models/force";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UrlResources} from "../resources/url-resources";
import {DetailedForce} from "../models/detailed-force";
@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    getListOfForces() : Observable<Force[]> {
        return this.http.get(UrlResources.baseForcesUrl).map(this.processData).catch(this.handleError);
    }

    getSpecificForce(forceId: string): Observable<DetailedForce> {
        return this.http.get(`${UrlResources.baseForcesUrl}/${forceId}`).map(this.processData).catch(this.handleError);
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
