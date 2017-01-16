/**
 * Created by AnDin0 on 12/01/17.
 */

import  {Injectable} from  '@angular/core';
import {Http} from  '@angular/http';
import 'rxjs/Rx'
import './xhr-xdr-adapter.js';
import {Response} from '@angular/http';

//import {@CrossOrigin} from './xhr-xdr-adapter.js';


declare var XDomainRequest: { new (); create(); };


//@CrossOrigin()
@Injectable()
export class RedditService {
    http: any;
    baseUrl: String;
    method: String;
    responseText: String;


    constructor(http:Http)
    {
        this.http = http;
        //this.baseUrl = 'https://www.reddit.com/r';
        this.baseUrl = 'http://localhost:3000/api/v1/heroes/';

    }


  getPosts(category, limit)
  {

   // return this.http.get(this.baseUrl + '/' + limit).
   //c© map(res => res.json());

  }

  createCORSRequest(method:string, url:string){
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in  xhr){
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
      xhr = new XDomainRequest();
      xhr.open(method, url);

      if (url != null) {
        xhr.setRequestHeader("Access-Control-Allow-Origin", url);
      } else {
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      }
    } else {
      xhr = null;
    }
    return xhr.send();
  }

/*
  request = this.createCORSRequest(method, "http://www.nczonline.net/");
  if (request){
    request.onload = function(){
      //do something with request.responseText
    };
    request.send();
  }*/


}


