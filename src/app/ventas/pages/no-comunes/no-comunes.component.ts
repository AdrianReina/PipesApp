import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Adrián';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    if (this.nombre === 'Alba' && this.genero === 'femenino') {
      this.nombre = 'Adrián';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Alba';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    if (this.clientes.length == 2) {
      this.clientes = [];
    } else if (!this.clientes.length) {
      this.clientes.push('Daniel');
    } else if (this.clientes.length == 1) {
      this.clientes.push('Maria');
    }
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Adrian',
    edad: 22,
    direccion: 'Julio Valdelomar',
  };

  //Json Pipe
  heroes = [
    {
      nombre: 'Spiderman',
      vuela: 'true',
    },
    {
      nombre: 'Ironman',
      vuela: 'true',
    },
    {
      nombre: 'Aquaman',
      vuela: 'false',
    },
  ];

  //Async Pipe
  miObservable = interval(3500); // 0,1,2,3,4,5,6...

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
