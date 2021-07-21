import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  ordenarPor: string = '';
  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo,
    },
  ];

  setMayuscula() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
