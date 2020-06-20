import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = "Capitán América";
  nombre2:string = "NiNia lIbra";
  aArray:number[] = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  porcentaje:number = 0.423;
  salario:number = 1235.4;
  fecha:Date = new Date();
  idioma:string = 'es';

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "20"
    }
  }

  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("Llegó la data");
    }, 4500);
  });

  cambiaIdioma(idioma:string):void{

    this.idioma = idioma;
  }
}
