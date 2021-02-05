import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, AfterViewInit {

  @Input() peliculas:Movie[];
  swiper:Swiper;

  constructor() { }

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void{

    this.swiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }

}
