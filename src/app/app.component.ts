import { Component } from '@angular/core';
import { Lembrete } from './lembrete/lembrete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projeto-facul';

  lembretes: Lembrete[] = [];
  
  onLembreteAdicionado(lembrete){
    console.log(lembrete);
    this.lembretes = [...this.lembretes, lembrete];
  }
}
