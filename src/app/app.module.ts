import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// pages
import { HomeComponent } from './pages/home/home.component';

// components
import { PokeListComponent } from './pages/home/components/poke-list/poke-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeListComponent,
    HeaderComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
