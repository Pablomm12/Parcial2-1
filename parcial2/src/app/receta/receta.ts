export class Receta {

    id: number;
    nombre: string;
    descripcion: string;
    dificultad: string;
    duracion: string;
    ingredientes: string;
    categoria: string;
    imagen: string;
    estrellas : string;
    cantidadOpiniones: string;
    autorReceta: string;

 constructor(
   id: number,
   nombre: string,
   descripcion: string,
   dificultad: string,
   duracion: string,
   ingredientes: string,
   categoria: string,
   imagen: string,
   estrellas : string,
   cantidadOpiniones: string,
   autorReceta: string
 ) {
   
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.duracion = duracion;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
    this.imagen = imagen;
    this.estrellas = estrellas;
    this.cantidadOpiniones = cantidadOpiniones;
    this.autorReceta = autorReceta;
    
 }
}