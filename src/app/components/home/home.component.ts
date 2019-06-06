import { Component, OnInit } from '@angular/core';
import {LogginPageService} from '../../services/loggin-page.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario:string;
  
  constructor(private  logginPageService:  LogginPageService) { 
  this.usuario=localStorage.getItem("usuario");

    
  }

  ngOnInit() {
    
  }

}
