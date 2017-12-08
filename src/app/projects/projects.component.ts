import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	home4DawgsUrl = 'https://home4dawgs.herokuapp.com'
	phfUrl = 'https://github.com/mgh0010/phf'
	whyDoThatUrl = 'https://whydothat.herokuapp.com/'
	groupMeBotUrl = 'https://github.com/mgh0010/lil-cute-bot'

  constructor() { }

  ngOnInit() {
  }

}
