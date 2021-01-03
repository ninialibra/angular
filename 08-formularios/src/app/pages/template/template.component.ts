import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Ethan',
    apellido: 'Hunk',
    correo: 'eh@correo.com',
    pais: '',
    genero: ''
  }

  paises:any[] = [];

  constructor(private paisesService:PaisesService) { }

  ngOnInit(): void {

    this.paisesService.getPaises()
      .subscribe(paises=>{
        this.paises = paises;  
        this.paises.unshift({
          nombre: 'Seleccione país...',
          codigo: ''
        });      
      });
  }

  guardar(formT:NgForm){
    console.log(formT);

    if(formT.invalid){

      Object.values(formT.controls).forEach(control=>{
        control.markAsTouched();
      });

      return;
    }

    console.log(formT.value);
    
  }

}
