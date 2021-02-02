import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [NavbarComponent, SlideComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SlideComponent
  ]
})
export class ComponentsModule { }
