import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from "./primeiro/meu-primeiro-componente";
import { CursosComponent } from "./cursos/cursos.component";
import { CursosService } from "./cursos/service.component";

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 Boilerplate</h1>
            <p>Hello World!</p>
            <meu-primeiro-componente></meu-primeiro-componente>
            <cursos-lista></cursos-lista>
            `,            
})
export class AppComponent  { }
