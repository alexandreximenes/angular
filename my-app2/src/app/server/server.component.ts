import {Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

    disabled:boolean = false;
    saida:string = "";
    server = [];

    toggleButton(){
        this.disabled = !this.disabled;
    }

    clear(event: Event){
        this.saida = '';
        this.server = [];
    }

    addPlusText(){
        this.server.push(this.saida);
    }

    updateInput(event: Event){
        this.saida = (<HTMLInputElement>event.target).value.toUpperCase();
    }

    existeConteudo(){
        return this.saida != '';
    }

    
    naoExisteConteudo(){
        return this.saida == '';
    }

}