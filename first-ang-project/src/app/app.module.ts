import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, BooksComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
