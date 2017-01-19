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
import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = RedditsPage;
        this.tab2Root = SettingsPage;
        this.tab3Root = AboutPage;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Component({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map