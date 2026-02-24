import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  resultado = '';
  constructor() {}
  a = '';
  b = '';
  c = '';

  figura(){
    const x = parseFloat(this.a);
    const y = parseFloat(this.b);
    const z = parseFloat(this.c);

    if(isNaN(x) || isNaN(y) || isNaN(z)){
      this.resultado = `Por favor, insira os 3 valores em seus respectivos campos.`;
      return;
    }

    if(x + y > z && x + z > y && y + z > x){
      if(x === y && y === z){
        this.resultado = `A figura formada é um triângulo equillátero!`;
      }
      else if(x === y || x === z || y === z){
        this.resultado = `A figura formada é um triângulo isósceles!`;
      }
      else{
        this.resultado = `A figura formada é um triângulo escaleno!`;
      }
    }
    else{
      this.resultado = `A figura formada não é um triângulo.`
    }
  }

}
