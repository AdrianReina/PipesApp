import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'Adrian';
  nombreUpper: string = 'ADRIAN';
  nombreCompleto: string = 'ADriAn rEina';

  fecha: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
