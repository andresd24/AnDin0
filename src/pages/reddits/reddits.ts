import { Component } from '@angular/core';
import { View,CORE_DIRECTIVES} from 'angular2/core';
import {Http, Response,HTTP_PROVIDERS} from 'angular2/http'

import { NavController } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service';
import 'rxjs/Rx.js';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  responseText: String;


  constructor(public navCtrl: NavController, private heroesService:RedditService) {

  }


  ngOnInit() {
    this.getPosts('sports',5);
  }

  getPosts(category, limit) {


    this.heroesService.getPosts(category, limit).subscribe(response => {
      this.items = response });

    alert(JSON.stringify(this.heroesService.getPosts(category, limit).response));


  }



  /*
  ngOnInit() { this.getHeroes(); }
*/
  hack(val) {
    return Array.from(val);
  }

  /*
  getHeroes() {
    let baseUrl = 'http://127.0.0.1:3000/api/v1/heroes/';
    let that = this;

    var xhr = this.heroesService.createCORSRequest('GET', baseUrl);

    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    let my_items: any;
    // Response handlers.
     xhr.onload = function() {
       var data = this.response;


        alert(data);

       var my_items = this.response;

        //this.response.map(res => res.json()).subscribe(response => {
        //  that.items = this.response });
       xhr.response.subscribe(response => { my_items = response });

        //xhr.response.map( RedditsPage.arguments.items);
        alert('Response from CORS request to ' + baseUrl);
        //alert(that.items);


    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    this.items = my_items;
    xhr.send();



  }
  */


    /*  getHeroes(category, limit) {
     this.redditService.createCORSRequest('GET','http://localhost:3000/api/v1/heroes').subscribe(response => {
     this.items = response.data.children });

     }
     */

    /*  getHeroes(cat, cart) {

     this.redditService.createCORSRequest('GET', 'http://localhost:3000/api/v1/heroes').subscribe(response => {
     this.items = response.data.children });
     }


     */


}
