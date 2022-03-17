import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ClientiComponent } from './clienti-components/clienti/clienti.component';
import { FattureComponent } from './fatture-component/fatture/fatture.component';
import { FattureDetailComponent } from './fatture-component/fatture-detail/fatture-detail.component';
import { EditFattureComponent } from './fatture-component/edit-fatture/edit-fatture.component';
import { AddFattureComponent } from './fatture-component/add-fatture/add-fatture.component';
import { FattureClienteComponent } from './fatture-component/fattureCliente/fatture-cliente/fatture-cliente.component';
import { AddClienteComponent } from './clienti-components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clienti-components/edit-cliente/edit-cliente.component';
import { ClienteDetailComponent } from './clienti-components/cliente-detail/cliente-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path:'', component: LoginComponent},




  { path:"clienti",component: ClientiComponent,canActivate: [LoginGuard] },
  { path:"clienti/page/:page",component: ClientiComponent,canActivate: [LoginGuard] },
  { path:"addCliente",component: AddClienteComponent ,canActivate: [LoginGuard]},
  { path:"editClienti/:id",component: EditClienteComponent,canActivate: [LoginGuard] },
  { path:"clienteDetail/:id",component: ClienteDetailComponent,canActivate: [LoginGuard] },




  { path:"fatture/page/:page",component: FattureComponent ,canActivate: [LoginGuard] },
  { path:"fattureDetail/:id",component: FattureDetailComponent,canActivate: [LoginGuard] },
  { path:"editFatture/:id",component: EditFattureComponent,canActivate: [LoginGuard] },
  { path:"addFatture/:id",component: AddFattureComponent,canActivate: [LoginGuard] },


  { path:"users/page/:page",component: UsersComponent ,canActivate: [LoginGuard] },

  { path:"fatture/clienti/:id",component: FattureClienteComponent ,canActivate: [LoginGuard] },
  { path:"fatture/clienti/:id/page/:page",component: FattureClienteComponent ,canActivate: [LoginGuard] },

  { path:"signUp",component: SignUpComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
