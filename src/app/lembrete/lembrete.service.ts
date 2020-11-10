import { Injectable } from '@angular/core';
import { Lembrete } from './lembrete.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LembreteService {

  private lembretes: Lembrete[] = [];
  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  getLembretes(): Lembrete[] {
    return[...this.lembretes];
  }

  adicionarLembrete(dataCadastro: string, dataEntrega: string, atividade: string) {
    const lembrete: Lembrete = {
       dataCadastro: dataCadastro,
       dataEntrega: dataEntrega,
       atividade: atividade
    }
    this.lembretes.push(lembrete);
    this.listaLembretesAtualizada.next([...this.lembretes]);
  }

  getListaDeLembretesAtualizadaObservable(){
    return this.listaLembretesAtualizada.asObservable();
  }
}
