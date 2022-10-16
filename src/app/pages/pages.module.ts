import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pages
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

// components

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
