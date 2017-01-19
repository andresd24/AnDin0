import { Component } from '@angular/core';
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

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    let baseUrl = 'http://127.0.0.1:3000/api/v1/heroes/';
    var xhr = this.heroesService.createCORSRequest('GET', baseUrl);

    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
     /// this.items = xhr.response.data.children;
      alert('Response from CORS request to ' + baseUrl);
      alert(text);
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    xhr.send();
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
