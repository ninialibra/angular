import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(form:NgForm){

    if(form.invalid){
      console.log("Formulario no válido");      
      return;
    }

    Swal.fire({
      title: 'Espere...',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();


    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(resp=>{
        console.log(resp);         
      });
    }else{
      this.heroesService.crearHeroe(this.heroe)
      .subscribe(resp=>{
        console.log(resp);         
      });
    }

    
    
  }

}