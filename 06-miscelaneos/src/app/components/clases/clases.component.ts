import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta:string = "alert-danger";
  propiedades={
    danger: false
  }

  loading:boolean = false;

  constructor() { }

  ejecutar(){
    this.loading = true;

    setTimeout(()=>this.loading=false,3000);
  }

  ngOnInit(): void {
  }

}
