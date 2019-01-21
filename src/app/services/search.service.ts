import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { debug } from 'util';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SearchService {
  
  domain = "http://localhost:8080"

  constructor( 

    private http:Http 

  ) { }

  searchRequest(search: any) { //search request function. Asks the backend for a result from search
    return this.http.post(this.domain + '/searchrequests/result', search).map(res => res.json) //sends a request to the back end. Goes to the file and than router module.
  }                                                                                     //response is mapped to a res.json    
}
  