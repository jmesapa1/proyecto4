import { Component, OnInit } from '@angular/core';
import { LogginPageService } from  '../../services/loggin-page.service';

@Component({
  selector: 'app-loggin-page',
  templateUrl: './loggin-page.component.html',
  styleUrls: ['./loggin-page.component.css']
})
export class LogginPageComponent implements OnInit {

  constructor(public logginPageService:  LogginPageService) { }

  ngOnInit() {
  }

}
