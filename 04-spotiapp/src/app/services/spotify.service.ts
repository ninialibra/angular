import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log("arranco");
    
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgJl_q-SMr4Aa9eTqLkxNtzIACP460IrGOL4K40td1Tsc2-1FLA_HS_Arc0UWnavTPukPBQFZTBBobTRU'
    });

    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers})
              .pipe(map(data=>data['albums'].items))  
  }

  getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgJl_q-SMr4Aa9eTqLkxNtzIACP460IrGOL4K40td1Tsc2-1FLA_HS_Arc0UWnavTPukPBQFZTBBobTRU'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
              .pipe(map(data=>data['artists'].items))  

  }
}
