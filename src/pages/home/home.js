var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { GitHubService } from '../../services/github';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
var HomePage = (function () {
    function HomePage(github, nav) {
        this.github = github;
        this.nav = nav;
    }
    HomePage.prototype.getRepos = function () {
        var _this = this;
        this.github.getRepos(this.username).subscribe(function (data) {
            _this.foundRepos = data.json();
        }, function (err) { return console.error(err); }, function () { return console.log('getRepos completed'); });
    };
    HomePage.prototype.goToDetails = function (repo) {
        this.nav.push(DetailsPage, { repo: repo });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
        providers: [GitHubService]
    }),
    __metadata("design:paramtypes", [GitHubService,
        NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map