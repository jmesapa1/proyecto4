import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LogginPageService {
  user: Observable<firebase.User>;
  usuario:string;
  
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.user = afAuth.authState;
   
  
  }
  

  async  login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['/home']);
        this.usuario=this.afAuth.auth.currentUser.email;
        alert("BIENVENIDO: " + this.usuario);
        localStorage.setItem('usuario',this.usuario);

    } catch (e) {
        alert("No se pudo loggear verifique informacion " );
    }
    }

}
