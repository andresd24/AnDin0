/**
 * Created by AnDin0 on 12/01/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx.js';
var RedditService = (function () {
    function RedditService(http) {
        this.http = http;
        //this.baseUrl = 'https://www.reddit.com/r';
        this.baseUrl = 'http://127.0.0.1:3000/api/v1/heroes/';
        var xhr = this.createCORSRequest('GET', this.baseUrl);
        xhr.send();
    }
    RedditService.prototype.getPosts = function (category, limit) {
        // return this.http.get(this.baseUrl + '/' + limit).
        // map(res => res.json());
    };
    RedditService.prototype.createCORSRequest1 = function (method, url) {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'localhost');
        return this.http.get(url, { headers: headers }).map(function (res) { return res.res.json(); });
    };
    // Create the XHR object.
    RedditService.prototype.createCORSRequest = function (method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
        }
        else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr.open(method, url);
        }
        else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    };
    // Make the actual CORS request.
    RedditService.prototype.makeCorsRequest = function (url) {
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
                var text = xhr.response.json();
                var title = getTitle(text);
                alert('Response from CORS request to ' + url + ': ' + title);
            };
            xhr.onerror = function () {
                alert('Woops, there was an error making the request.');
            };
            xhr.send();
        }
    };
    return RedditService;
}());
RedditService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RedditService);
export { RedditService };
//# sourceMappingURL=reddit.service.js.map