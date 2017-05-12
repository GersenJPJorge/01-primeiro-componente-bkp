/**
 * name
 */

import { Component } from "@angular/core";

import { CursosService } from "./service.component";

@Component ({

    moduleId: module.id,

     selector: 'cursos-lista',
/*     template: `
               <h3>Cursos {{ nomePortal }}</h3>
               <ul>
                   <li *ngFor="let curso of cursos">
                       {{ curso }} 
                   </li>
               </ul>
`*/
templateUrl: 'cursos.component.html'

})
export class CursosComponent {

    nomePortal = 'Loiane.training';
   
    cursos: String[];

    constructor(){
        var cursosService = new CursosService();
        this.cursos = cursosService.getCursos();
    }
    

}