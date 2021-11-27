import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SliderFormulariosComponent } from './home/slider-formularios/slider-formularios.component';
import { RegisterBookComponent } from './task/register-book/register-book.component';
import { SearchBookComponent } from './task/search-book/search-book.component';
import { ListarBookComponent } from './task/listar-book/listar-book.component';
import { UpdateBookComponent } from './task/update-book/update-book.component';

import {BooksService} from "./services/books.service";

import {AuthGuard } from "./guard/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderFormulariosComponent,
    RegisterBookComponent,
    SearchBookComponent,
    ListarBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
