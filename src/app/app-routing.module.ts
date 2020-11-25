import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: LembreteListaComponent},
      {path: 'criar', component: LembreteInserirComponent},
      {path: 'editar/:idLembrete', component: LembreteInserirComponent}
    ],
    canActivate: [AuthGuard]
  },
   {
     path: '',
     component: AuthenticationComponent,
     children: [
       {path: '', redirectTo: 'login', pathMatch: 'full'},
       {path: 'login', component: LoginComponent},
       {path: 'criar-conta', component: CreateAccountComponent}
     ]
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
