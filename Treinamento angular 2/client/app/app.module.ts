import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {FotoModule} from './foto/foto.module'
import {TextModule} from './text/text.module'
import {HttpModule} from '@angular/http'
import {PainelModule} from './painel/painel.module'
import {CadastroModule} from './cadastro/cadastro.module'
import 'rxjs/add/operator/map'



@NgModule({
    imports: [BrowserModule, FotoModule, TextModule, HttpModule, PainelModule, CadastroModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule{

}