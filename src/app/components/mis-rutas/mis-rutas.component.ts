import { Component, OnInit } from '@angular/core';
import {MisRutasService } from '../../services/mis-rutas.service'

@Component({
  selector: 'app-mis-rutas',
  templateUrl: './mis-rutas.component.html',
  styleUrls: ['./mis-rutas.component.css']
})
export class MisRutasComponent implements OnInit {
  usuario:string;
  SinEmpezar= true;
  title: string = 'MAPA';
  lat: number = 6.175751;
  lng: number = -75.577623;
  latAux: number;
  lngAux: number; 
  contador:number=0;
  rutaidbandera=true;
  public rutas=[];
  public rutasCompartidas=[];
  public markers=[];
  coordinates;
  constructor(public misRutasService:MisRutasService ) { }

  ngOnInit() {
    this.usuario=localStorage.getItem("usuario");

    this.misRutasService.obtenerRutasCompartidas(this.usuario).subscribe((rutasCompartidasSnapshot) => {
      this.rutasCompartidas = [];
      rutasCompartidasSnapshot.forEach((rutasCompartidasData: any) => {
       
          
        this.rutasCompartidas.push({
          id: rutasCompartidasData.payload.doc.id,
          data: rutasCompartidasData.payload.doc.data()
        });
        
      })
    });



    this.misRutasService.obtenerRutas(this.usuario).subscribe((rutasSnapshot) => {
      this.rutas = [];
      rutasSnapshot.forEach((rutasData: any) => {
        if(rutasData.payload.doc.id !="compartido"){
        this.rutas.push({
          id: rutasData.payload.doc.id,
          data: rutasData.payload.doc.data()
        });
      
      }})
    });
    

  
   
  }
  

  obtenerCoordenadas(ruta:string){
    this.misRutasService.obtenerCoordenadasRutas(this.usuario,ruta).subscribe((markersSnapshot) => {
      this.markers = [];
      markersSnapshot.forEach((markersData: any) => {
        this.markers.push({
          id: markersData.payload.doc.id,
          data: markersData.payload.doc.data()
        });
      })
    });
    

  }
  


  compartir(usuarioReceptor:string,ruta:string){
    direccionDb : String ;
     this.misRutasService.compartirService(this.usuario,usuarioReceptor,ruta);
  }

  obtenerCoordenadasCom(ruta:string){
    var res = ruta.split("-");
    var user=res[1];
    var rut=res[0];
    
    this.misRutasService.obtenerCoordenadasRutas(user,rut).subscribe((markersSnapshot) => {
      this.markers = [];
      markersSnapshot.forEach((markersData: any) => {
        this.markers.push({
          id: markersData.payload.doc.id,
          data: markersData.payload.doc.data()
        });
      })
    });
    
console.log(this.markers);
  }

  rutaclick(ruta:string){
    localStorage.setItem('rutaclick',ruta);
  }
  getrutaclick(ruta:string){
return localStorage.getItem('rutaclick');
  }

  rutaclickcom(ruta:string){
    localStorage.setItem('rutaclickcom',ruta);
  }
  getrutaclickcom(ruta:string){
return localStorage.getItem('rutaclickcom');
  }
}
