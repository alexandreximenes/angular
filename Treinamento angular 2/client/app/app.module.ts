import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {FotoModule} from './foto/foto.module'
import {TextModule} from './text/text.module'
import {HttpModule} from '@angular/http'
import {PainelModule} from './painel/painel.module'
import {CadastroComponent} from './cadastro/cadastro.component'
import {ListagemComponent} from './listagem/listagem.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routes'
import 'rxjs/add/operator/map'


@NgModule({
    imports: [BrowserModule, FotoModule, TextModule, HttpModule, PainelModule, routing, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}