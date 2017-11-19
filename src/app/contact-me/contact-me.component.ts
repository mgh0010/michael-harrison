import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
	mailUrl = 'mailto:mghharrison@gmail.com';
	telUrl = 'tel:+1-205-516-3702'

  constructor() { }

  ngOnInit() {
  }

}
