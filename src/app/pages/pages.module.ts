import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pages
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

// components

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
