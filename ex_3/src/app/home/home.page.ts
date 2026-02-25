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

  nota1 = '';
  nota2 = '';
  nota3 = '';
  nota4 = '';

  media(){
    const a = parseFloat(this.nota1);
    const b = parseFloat(this.nota2);
    const c = parseFloat(this.nota3);
    const d = parseFloat(this.nota4);

    const media = (a + b + c + d)/4;

    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
      this.resultado = `Por favor, insira as 4 notas em seus respectivos campos.`;
      return;
    }

    if(media >=6){
      this.resultado = `Resultado: ${media} | Aprovado!`;
    }
    else if(media <= 5.9 && media >= 3){
      this.resultado = `Resultado: ${media} | Recuperação`;
    }
    else{
      this.resultado = `Resultado: ${media} | Retido`;
    }
  }

}
