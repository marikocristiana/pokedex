import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    PokeListComponent
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
