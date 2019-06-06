import { Component, OnInit } from '@angular/core';
import {CrearRutaService} from '../../services/crear-ruta.service'
import { stringify } from 'querystring';
@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.component.html',
  styleUrls: ['./crear-ruta.component.css']
})
export class CrearRutaComponent implements OnInit {
  usuario:string;
  public SinEmpezar= true;
  title: string = 'MAPA';
  lat: number = 6.15;
  lng: number = -75.6;
  latAux: number;
  lngAux: number; 
  contador:number=0;
  public rutas=[];
  coordinates;
  fecha:number;
  hourI:number;
  minutesI:number;
  hourF:number;
  minutesF:number;
  
  
  constructor(public crearRutaService:CrearRutaService) { 
    
  }

  ngOnInit() {
    this.usuario=localStorage.getItem("usuario");
    this.crearRutaService.obtenerRutas(this.usuario).subscribe((rutasSnapshot) => {
      this.rutas = [];
      rutasSnapshot.forEach((rutasData: any) => {
        this.rutas.push({
          id: rutasData.payload.doc.id,
          data: rutasData.payload.doc.data()
        });
      })
    });
  }

  empezarRuta(nombreRuta:string){
    let strContador;
    var date = new Date();
    this.hourI=date.getHours();
    this.minutesI = date.getMinutes();
    this.fecha =date.getDate();
    
    this.title=this.title + " - Tu posicion";
    let data = {
      nombre: nombreRuta,
      fecha: this.fecha+"/06/2019",
      horaInicial: this.hourI+":"+this.minutesI,
      horaFinal:"00:00"
    };
    this.crearRutaService.crearRutaDb(this.usuario,data); 
  

    this.crearRutaService.getPosition().subscribe(
      (pos: Position) => {
          this.coordinates = {
            latitude:  +(pos.coords.latitude),
            longitude: +(pos.coords.longitude)
          };
          this.lat=pos.coords.latitude;
          this.lng=pos.coords.longitude;


          if(!this.SinEmpezar){
           
            this.contador++;
            strContador=this.contador.toString();
            
            this.crearRutaService.traking(this.usuario,nombreRuta,strContador,this.lat,this.lng);
          }
      });
 
   
  
   
  }

  terminarRuta(nombreRuta:string){
    var date = new Date();
    this.hourF=date.getHours();
    this.minutesF = date.getMinutes();
    
    
    let data = {
      nombre: nombreRuta,
      fecha: this.fecha+"/06/2019",
      horaInicial: this.hourI+":"+this.minutesI,
      horaFinal:this.hourF+":"+this.minutesF
    };
   this.SinEmpezar=true;
   this.contador=0;
   this.title="MAPA";
   this.crearRutaService.finalizarRutaDb(this.usuario,nombreRuta,data);
   this.lat=6.15;
   this.lng=-75.6;
  }


}





