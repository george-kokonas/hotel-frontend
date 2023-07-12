import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [{ path: '', component: ClientsComponent }];

@NgModule({
  declarations: [AppComponent, ClientsComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
