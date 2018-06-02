import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
  name: "filtrarPorTitulo"
})

export class FiltrarPorTitulo implements PipeTransform{

    transform(fotos: FotoComponent[], digitado: string){
        
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()) );
        
    }
}