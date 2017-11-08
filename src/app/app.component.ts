import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	// bgUrl = "/assets/media/bg2.jpg";
	bgUrl = "/assets/media/cool.jpg";
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
  	this.githubShouldFadeIn = true;
  	setTimeout(()=>{this.linkedInShouldFadeIn = true;}, 30);
  	setTimeout(()=>{this.facebookShouldFadeIn = true;}, 60);
  	setTimeout(()=>{this.instagramShouldFadeIn = true;}, 90);
  }

  fadeInSideNav() {
  	this.mhShouldFadeIn = true;
  	setTimeout(()=>{this.aboutMeShouldFadeIn = true;}, 30);
  	setTimeout(()=>{this.resumeShouldFadeIn = true;}, 60);
  	setTimeout(()=>{this.projectsShouldFadeIn = true;}, 90);
  	setTimeout(()=>{this.contactMeShouldFadeIn = true;}, 120);
  }

}
