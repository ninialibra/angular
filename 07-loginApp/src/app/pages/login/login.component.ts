import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:UsuarioModel;
  recordarme = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  login(form:NgForm){

    if(form.invalid){
      return;
    }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp=>{
        console.log(resp);
        
        Swal.close();

        if(this.recordarme){
          localStorage.setItem('email',this.usuario.email);
        }

        this.router.navigateByUrl('/home'); 

      },(e)=>{
        console.log(e.error.error.message);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: e.error.error.message
        });
        
      });

  }

}
