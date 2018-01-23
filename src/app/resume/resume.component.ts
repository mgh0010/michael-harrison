import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
	acfImage = '/assets/media/acf.jpg';
	UXImage = "/assets/media/UX.jpg";
	CPlusPlusImage = "/assets/media/c++.jpg";
	fiberImage = "/assets/media/fiber.jpg";

  constructor() { }

  ngOnInit() {
  }

}
