import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { Routes, RouterModule } from '@angular/router';
import { LogginPageComponent } from './components/loggin-page/loggin-page.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { LogginPageService } from './services/loggin-page.service';
import { CrearRutaComponent } from './components/crear-ruta/crear-ruta.component';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
import { MisRutasComponent } from './components/mis-rutas/mis-rutas.component';
import { SingupPageComponent } from './components/singup-page/singup-page.component';



  var config = {
    apiKey: "AIzaSyDIeCwexsrzW01LPgxxlBQiOngMkMEgXSs",
    authDomain: "proyecto4-ad3c0.firebaseapp.com",
    databaseURL: "https://proyecto4-ad3c0.firebaseio.com",
    projectId: "proyecto4-ad3c0",
    storageBucket: "proyecto4-ad3c0.appspot.com",
    messagingSenderId: "514040449474",
    appId: "1:514040449474:web:77658f4e1dfe91c2"
  };
  
const appRoutes: Routes = [
  { path: 'loggin', component: LogginPageComponent },
  {path:'',component:LogginComponent},
  {path:'home',component:HomeComponent},
  {path:'crear-ruta',component:CrearRutaComponent},
  {path:'mis-rutas',component:MisRutasComponent},
  {path:'singup',component:SingupPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    LogginPageComponent,
    HomeComponent,
    CrearRutaComponent,
    MisRutasComponent,
    SingupPageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      ),
      BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdYuyNJsDh109BltfEeCRdSvD89Z55iiY'
    })
    
      
  ],
  providers: [LogginPageService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
