import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formu: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.crearFormulario();
    this.cargarDatosFormulario();

  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.formu.get('pasatiempos') as FormArray;
  }

  get nombreNoValido(){
    return this.formu.get('nombre').invalid && this.formu.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.formu.get('apellido').invalid && this.formu.get('apellido').touched;
  }

  get correoNoValido(){
    return this.formu.get('correo').invalid && this.formu.get('correo').touched;
  }

  get calleNoValido(){
    return this.formu.get('direccion.calle').invalid && this.formu.get('direccion.calle').touched;
  }

  get ciudadNoValido(){
    return this.formu.get('direccion.ciudad').invalid && this.formu.get('direccion.ciudad').touched;
  }

  crearFormulario() {
    this.formu = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.minLength(5)]],
      apellido: ['',Validators.required],
      correo: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: this.formBuilder.group({
        calle: ['',Validators.required],
        ciudad: ['',Validators.required],
      }),
      pasatiempos: this.formBuilder.array([[],[],[]])
    });
  }

  cargarDatosFormulario(){

    //con setValue se tienen que mandar todas las propiedades. Con reset no haría falta
    this.formu.reset({
      nombre: "Cocos",
      apellido: "Channel"/*,
      correo: "",
      direccion: {
        calle: "La que sea",
        ciudad: "Gijón"
      }*/
    });
  }

  guardar(){
    console.log(this.formu);

    if(this.formu.invalid){

      return Object.values(this.formu.controls).forEach(control=>{

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched);
        }else{
          control.markAsTouched();
        }

      });
    }

    this.formu.reset({
      nombre: 'Sin nombre'
    });
    
  }

}
