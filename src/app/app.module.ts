import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';



import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { QuienSomosComponent } from './Components/quiensomos/quiensomos.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { VideoComponent } from './Components/video/video.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AsideComponent } from './Components/aside/aside.component';
import { ContactanosComponent } from './Components/contactanos/contactanos.component';




//Rutas
const routes: Routes = [
      {path: 'QuienSomos', component: QuienSomosComponent},
      {path: 'Servicios', component: ServiciosComponent},
      {path: 'Video', component: VideoComponent},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Contactanos', component: ContactanosComponent}
  ];
  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    QuienSomosComponent,
    ServiciosComponent,
    VideoComponent,
    InicioComponent,
    AsideComponent,
    ContactanosComponent,

   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
