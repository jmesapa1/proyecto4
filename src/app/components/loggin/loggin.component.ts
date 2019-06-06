import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mensajeLog(){
    console.log("TE LOGGEARAS");
    this.router.navigateByUrl('/loggin');



  }

  mensajeSin(){
    console.log("TE REGISTRARAS");
    this.router.navigateByUrl('/singup');
  }

}
