import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';

// Imports angular material
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { LembreteService } from './lembrete/lembrete.service';


@NgModule({
  declarations: [
    AppComponent,
    LembreteInserirComponent,
    CabecalhoComponent,
    LembreteListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [LembreteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
