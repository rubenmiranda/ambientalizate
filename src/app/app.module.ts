import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';
import { CodigoQRPage } from '../pages/codigo-qr/codigo-qr';
import { ZonasEcologicasPage } from '../pages/zonas-ecologicas/zonas-ecologicas';
import { EmpresasPage } from '../pages/empresas/empresas';
import { PuntosEcologicosPage } from '../pages/puntos-ecologicos/puntos-ecologicos';
import { PaginaScanerPage } from '../pages/pagina-scaner/pagina-scaner';
import { InformacionCanecaPage } from '../pages/informacion-caneca/informacion-caneca';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCalendarModule } from 'ionic2-calendar';
import { EventModalPage } from '../pages/event-modal/event-modal';
import { HomeEventModalPage } from '../pages/event-modal/event-modal';



@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    CodigoQRPage,
    ZonasEcologicasPage,
    EmpresasPage,
    PuntosEcologicosPage,
    PaginaScanerPage,
    EventModalPage,
    InformacionCanecaPage,
	HomeEventModalPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    CodigoQRPage,
    ZonasEcologicasPage,
    EmpresasPage,
    PuntosEcologicosPage,
    PaginaScanerPage,
    EventModalPage,
    InformacionCanecaPage,
	HomeEventModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}