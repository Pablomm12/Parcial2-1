import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.component.html',
  styleUrls: ['./receta-lista.component.css']
})
export class RecetaListaComponent implements OnInit {

  recetas: Array<Receta> = [];


  constructor(private recetaService: RecetaService) { }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  ngOnInit() {
    this.getRecetas();
  }

}
