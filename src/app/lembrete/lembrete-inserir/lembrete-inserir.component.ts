import { formatNumber } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';

@Component({
  selector:'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css'],
})

export class LembreteInserirComponent{

  constructor(public lembreteService: LembreteService){}

  onAdiocionarLembrete(form: NgForm) {

    if(form.invalid) {
      return;
    }
    this.lembreteService.adicionarLembrete(
      form.value.dataCadastro,
      form.value.dataEntrega,
      form.value.atividade
    );
    form.resetForm();
  }
}
