import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

declare const Parse: any;

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor() { 
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }

  getRehabs() {
    const Rehabs = Parse.Object.extend('Rehabs');
    const query = new Parse.Query(Rehabs);
    return query.find();
  }
}
