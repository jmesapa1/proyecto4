import { Component, OnInit } from '@angular/core';
import{SingupPageService} from '../../services/singup-page.service'

@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent implements OnInit {

  constructor(public singupPageService: SingupPageService) { }

  ngOnInit() {
  }

}
