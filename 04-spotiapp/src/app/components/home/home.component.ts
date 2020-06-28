import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  paises:any[] = [];
  nuevasCanciones: any[] = [];

  constructor(private http: HttpClient, private spotify: SpotifyService) { 

    this.spotify.getNewReleases()
      .subscribe((data: any)=>{        
        this.nuevasCanciones = data;
      });

    this.http.get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe((resp:any)=>{
        this.paises = resp;        
      });

  }

  

}
