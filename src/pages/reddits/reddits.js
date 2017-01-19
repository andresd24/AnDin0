var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import 'rxjs/Rx.js';
var RedditsPage = (function () {
    function RedditsPage(navCtrl, heroesService) {
        this.navCtrl = navCtrl;
        this.heroesService = heroesService;
    }
    RedditsPage.prototype.ngOnInit = function () { this.getHeroes(); };
    RedditsPage.prototype.getHeroes = function () {
        var baseUrl = 'http://127.0.0.1:3000/api/v1/heroes/';
        var xhr = this.items = this.heroesService.createCORSRequest('GET', baseUrl).response.data;
        alert(this.items);
        xhr.onload = function () {
            var text = xhr.responseText;
        };
        xhr.onerror = function () {
            alert('Woops, there was an error making the request.');
        };
    };
    return RedditsPage;
}());
RedditsPage = __decorate([
    Component({
        selector: 'reddits',
        templateUrl: 'reddits.html'
    }),
    __metadata("design:paramtypes", [NavController, RedditService])
], RedditsPage);
export { RedditsPage };
//# sourceMappingURL=reddits.js.map