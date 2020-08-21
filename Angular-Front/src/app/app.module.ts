import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './core/hello/hello.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
// import { ContactsModule } from './contacts/contacts.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    // ContactsModule,
    AppRoutingModule, // en dernier si route **
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
