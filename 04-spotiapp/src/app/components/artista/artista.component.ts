import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {

    this.router.params.subscribe(params=>{
      this.getArtista(params["id"]);      
    });
  }

  getArtista(id:string){
    this.spotify.getArtista(id)
      .subscribe(artista=>{
        console.log(artista);
        this.artista = artista;
      });
  }

  ngOnInit(): void {
  }

}
