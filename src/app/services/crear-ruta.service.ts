import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { last } from '@angular/router/src/utils/collection';
@Injectable({
  providedIn: 'root'
})
export class CrearRutaService {
  coordinates: any;
  subsription:Subscription;
  
  constructor(public firestore: AngularFirestore) { 

  
  }
  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        observer.next(pos);

        
      }),
      () => {
          console.log('Position is not available');
      },
      {
        enableHighAccuracy: true
      };
    });


    
  }

 crearRutaDb(usuario:string,data: {nombre: string, horaInicial: string}){
           return this.firestore.collection(usuario).doc(data.nombre).set(data);


  }
  finalizarRutaDb(usuario:string,nombreRuta:string,data:{horaFinal:string}){
    return this.firestore.collection(usuario).doc(nombreRuta).set(data);
  }

  traking(usuario:string,nombre:string,numeroPunto:string,lat:number,lng:number){
    return this.firestore.collection(usuario).doc(nombre).collection("puntos").doc(numeroPunto).set({latitud:lat,longitud:lng})
  }

  obtenerRutas(usuario:string){
    return this.firestore.collection(usuario).snapshotChanges();
  }

}
