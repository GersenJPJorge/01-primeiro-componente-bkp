import { Component } from '@angular/core';

/**
 * name
 */

@Component({
  selector: 'my-app',
  template: ``,            
})
export class CursosService {

getCursos(){
    return ['Angular2', 'Java', 'Ext JS', 'JavaScript'];
   }
}