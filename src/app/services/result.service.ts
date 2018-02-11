import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { debug } from 'util';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ResultService {
  
  domain = "http://localhost:8000"

  constructor( 

    private http:Http 

  ) { }

  resultResponse(result: any) { //result response get fucntion to get the results 
    return this.http.get(this.domain + '/resultresponse/result', result).map(res => res.json) //sends a request to the back end. Goes to the file and than router module.
  }                                                                                           //response is mapped to a res.json    
}