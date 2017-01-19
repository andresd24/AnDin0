/**
 * Created by AnDin0 on 12/01/17.
 */

import  {Injectable} from  '@angular/core';
import {Http, Headers} from  '@angular/http';
import 'rxjs/Rx.js';
//import './xhr-xdr-adapter.js';


declare var XDomainRequest: { new (); create(); };


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
        this.baseUrl = 'http://127.0.0.1:3000/api/v1/heroes/';
        var xhr = this.createCORSRequest('GET', this.baseUrl)
        xhr.send();

    }


  getPosts(category, limit)
  {

   // return this.http.get(this.baseUrl + '/' + limit).
   // map(res => res.json());

  }

  createCORSRequest1(method:string, url:string){

    let headers:any = new Headers();
    headers.append('Access-Control-Allow-Origin', 'localhost');

    return this.http.get(url, {headers: headers}).map(res => res.res.json());

  }

  // Create the XHR object.
    createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
          xhr.open(method, url);
      } else {
          // CORS not supported.
          xhr = null;
      }
    return xhr;
  }



// Make the actual CORS request.
  makeCorsRequest(url) {
    // This is a sample server that supports CORS.

    var xhr = this.createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }


    // Response handlers.
    function getTitle(text) {
      return text.match('<title>(.*)?</title>')[1];
    }

// Make the actual CORS request.
    function makeCorsRequest() {
      // This is a sample server that supports CORS.
      var url = 'http://127.0.0.1:3000/api/v1/heroes/';

      var xhr = this.createCORSRequest('GET', url);
      if (!xhr) {
        alert('CORS not supported');
        return;
      }

      // Response handlers.
      xhr.onload = function () {
        let items = xhr.response.json();
//        var title = getTitle(items);
        alert('Response from CORS request to ' + url);
      };

      xhr.onerror = function () {
        alert('Woops, there was an error making the request.');
      };

      xhr.send();
    }

  }
}


