import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formu: FormGroup;

  constructor(private formBuilder: FormBuilder, private validadores:ValidadoresService) {

    this.crearFormulario();
    this.cargarDatosFormulario();
    this.crearListeners();

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

  get pass1NoValido(){
    return this.formu.get('pass1').invalid && this.formu.get('pass1').touched;
  }

  get pass2NoValido(){
    
    const pass1 = this.formu.get('pass1').value;
    const pass2 = this.formu.get('pass2').value;

    return (pass1===pass2?false:true);
  }

  get usuarioNoValido(){
    return this.formu.get('usuario').invalid && this.formu.get('usuario').touched;
    
  }

  crearFormulario() {
    this.formu = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.minLength(5)]],
      apellido: ['',[Validators.required,this.validadores.noHerrera]],
      correo: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.validadores.existeUsuario],
      pass1: ['', [Validators.required]],
      pass2: ['', [Validators.required]],
      direccion: this.formBuilder.group({
        calle: ['',Validators.required],
        ciudad: ['',Validators.required],
      }),
      pasatiempos: this.formBuilder.array([])
    },{
      validators: this.validadores.passEquals('pass1','pass2')
    });
  }

  crearListeners(){
    this.formu.valueChanges.subscribe(valor=>{
      console.log(valor);      
    });

    this.formu.statusChanges.subscribe(status=>{
      console.log(status);      
    });

    this.formu.get('nombre').valueChanges.subscribe(console.log);
  }

  cargarDatosFormulario(){

    //con setValue se tienen que mandar todas las propiedades. Con reset no haría falta
    this.formu.reset({
      nombre: "Cocos",
      apellido: "Channel",
      correo: "correo@correo.com",
      pass1: "123",
      pass2: "123",
      direccion: {
        calle: "La que sea",
        ciudad: "Gijón"
      }
    });
  } 

  agregarPasatiempo(){
    this.pasatiempos.push(this.formBuilder.control('',Validators.required));
  }

  borrarPasatiempo(i:number){
    this.pasatiempos.removeAt(i);
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
