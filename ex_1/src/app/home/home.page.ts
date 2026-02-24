import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  temperatura = '';
  escolha = '';
  resultado = '';
  constructor() {}

  temp(){
    const valor = parseFloat(this.temperatura);

    if(isNaN(valor)){
      this.resultado = 'Por favor, digite um número válido.';
      return;
    }
    else if(this.escolha === 'celsius'){
      const celsius_fahrenheit = ((valor*9)+160)/5
      this.resultado = `Resultado: ${celsius_fahrenheit.toFixed(2)} ⁰F`
    }
    else if(this.escolha === 'fahrenheit'){
      const fahrenheit_celsius = (valor-32)*(5/9)
      this.resultado = `Resultado: ${fahrenheit_celsius.toFixed(2)} ⁰C`
    }
  }


}
