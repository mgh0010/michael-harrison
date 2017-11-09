import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
	githubShouldFadeIn = false;
	facebookShouldFadeIn = false;
	linkedInShouldFadeIn = false;
	instagramShouldFadeIn = false;
	mhShouldFadeIn = false;
	aboutMeShouldFadeIn = false;
	resumeShouldFadeIn = false;
	projectsShouldFadeIn = false;
	contactMeShouldFadeIn = false;

  ngOnInit() {
  	setTimeout(()=>{this.fadeInIcons()}, 500);
  	setTimeout(()=>{this.fadeInSideNav()}, 500);
  }

  fadeInIcons() {
    setTimeout(()=>{this.githubShouldFadeIn = true;}, 600);
  	setTimeout(()=>{this.linkedInShouldFadeIn = true;}, 630);
  	setTimeout(()=>{this.facebookShouldFadeIn = true;}, 660);
  	setTimeout(()=>{this.instagramShouldFadeIn = true;}, 690);
  }

  fadeInSideNav() {
  	this.mhShouldFadeIn = true;
  	setTimeout(()=>{this.aboutMeShouldFadeIn = true;}, 30);
  	setTimeout(()=>{this.resumeShouldFadeIn = true;}, 60);
  	setTimeout(()=>{this.projectsShouldFadeIn = true;}, 90);
  	setTimeout(()=>{this.contactMeShouldFadeIn = true;}, 120);
  }

}
