import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService} from '../../app/services/reddit.service'
import  "rxjs/add/operator/map";
import {Response} from '@angular/http';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  responseText: String;

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }


  ngOnInit()
  {
       this.redditService.createCORSRequest('GET', 'http://localhost:3000/api/v1/heroes');
  }

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
