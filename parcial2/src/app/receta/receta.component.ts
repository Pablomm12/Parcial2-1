import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  recetas: Array<Receta> = [];
  constructor() { }

  ngOnInit() {
  }

}
