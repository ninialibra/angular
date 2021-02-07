import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [NavbarComponent, SlideComponent, PeliculasPosterGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports:[
    NavbarComponent,
    SlideComponent,
    PeliculasPosterGridComponent
  ]
})
export class ComponentsModule { }
