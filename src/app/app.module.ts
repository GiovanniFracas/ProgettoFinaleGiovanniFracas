import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { ClientiComponent } from './clienti-components/clienti/clienti.component';
import { FattureComponent } from './fatture-component/fatture/fatture.component';
import { AddFattureComponent } from './fatture-component/add-fatture/add-fatture.component';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { EditFattureComponent } from './fatture-component/edit-fatture/edit-fatture.component';
import { FattureClienteComponent } from './fatture-component/fattureCliente/fatture-cliente/fatture-cliente.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AddClienteComponent } from './clienti-components/add-cliente/add-cliente.component';
import { EditClienteComponent } from './clienti-components/edit-cliente/edit-cliente.component';
import { ClienteDetailComponent } from './clienti-components/cliente-detail/cliente-detail.component';
import { FattureDetailComponent } from './fatture-component/fatture-detail/fatture-detail.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UsersComponent,
    ClientiComponent,
    FattureComponent,
    AddFattureComponent,
    EditFattureComponent,
    FattureClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    ClienteDetailComponent,
    FattureClienteComponent,
    FattureComponent,
    FattureDetailComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
     NgxBootstrapIconsModule
  ],
  providers: [AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
