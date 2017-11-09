import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
	myImageUrl1 = '/assets/media/myself2.jpg';
	myImageUrl2 = '/assets/media/singers.jpg';
	bgUrl = "/assets/media/cool.jpg";

  constructor() { }

  ngOnInit() {
  }

}
