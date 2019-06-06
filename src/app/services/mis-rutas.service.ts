import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { last } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class MisRutasService {

  constructor(private firestore: AngularFirestore) { }

  obtenerRutas(usuario:string){
    return this.firestore.collection(usuario).snapshotChanges();
  }

  obtenerRutasCompartidas(usuario:string){
    return this.firestore.collection(usuario).doc("compartido").collection("rutas").snapshotChanges();
  

    
  }

  obtenerCoordenadasRutas(usuario:string,ruta:string){
  return this.firestore.collection(usuario).doc(ruta).collection("puntos").snapshotChanges();
  }

  compartirService(usuarioEmisor:string,usuarioReceptor:string,ruta:string){

    return this.firestore.collection(usuarioReceptor).doc("compartido").collection("rutas").doc(ruta+"-"+usuarioEmisor).set({usuario:usuarioEmisor,ruta:ruta});
  
  }
}
