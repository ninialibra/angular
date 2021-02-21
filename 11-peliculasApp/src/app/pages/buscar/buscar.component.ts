import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  peliculas:Movie[] = [];
  texto_a_buscar:string;

  constructor(private activatedRoute:ActivatedRoute, private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      
      this.texto_a_buscar = params.texto;
      
      this.peliculasService.buscarPeliculas(params.texto).subscribe(movies=>{
        //console.log(movies);
        this.peliculas = movies; 
      });
      
    });

  }

}
