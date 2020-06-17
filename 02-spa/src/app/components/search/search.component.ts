import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any={};
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesServices:HeroesService, private router:Router) { 
    
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes = this._heroesServices.buscarHeroes(this.termino);      
    });
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
