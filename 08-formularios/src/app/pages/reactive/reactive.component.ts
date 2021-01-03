import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formu: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.formu = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
    });
  }

  guardar(){
    console.log(this.formu);
    
  }

}
