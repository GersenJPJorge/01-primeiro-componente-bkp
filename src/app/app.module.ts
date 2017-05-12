import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro-componente'
import { CursosComponent } from "./cursos/cursos.component";
import { CursosService } from "./cursos/service.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  MeuPrimeiroComponent,
                  CursosComponent,
                  CursosService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
