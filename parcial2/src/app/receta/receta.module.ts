import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListaComponent } from './receta-lista/receta-lista.component';

@NgModule({
 imports: [
   CommonModule
 ],
 exports: [RecetaListaComponent],
 declarations: [RecetaListaComponent]
})
export class RecetaModule { }