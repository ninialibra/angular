import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() peliculas:Movie[];

  constructor() { }

  ngOnInit(): void {

    console.log(this.peliculas);
    
  }

}
