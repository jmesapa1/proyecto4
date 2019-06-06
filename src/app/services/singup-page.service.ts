import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Observable, of } from 'rxjs'
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class SingupPageService {
  user: Observable<firebase.User>;
  usuario:string;
  
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router,public firestore: AngularFirestore) { 
    this.user = afAuth.authState;
   
  
  }
  

  register(usuario:string,contraseña:string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(usuario,contraseña)
      .then(res => {
        resolve(res);
        alert("Se ha creado el usuario");
        this.crearDb(usuario);
        this.router.navigate(['']);
      }, err => {
        reject(err);
        alert("ERROR verifique la informacion");
      })
    })
  }

  crearDb(usuario:string){
           return this.firestore.collection(usuario).doc('compartido').set({usuario:usuario});
  }
}
