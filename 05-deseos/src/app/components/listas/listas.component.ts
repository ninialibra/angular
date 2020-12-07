import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) lista:IonList;
  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
              private router:Router,
              private alertCtrl:AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){

    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
    
  }

  async editarLista(lista:Lista){

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            //console.log("cancelar");  
            this.lista.closeSlidingItems();          
          }
        },
        {
          text: 'Guardar',
          handler: (data)=>{
            if(data.titulo.length===0){
              return;
            }      
            
            this.deseosService.editarLista(lista, data.titulo);
            this.lista.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

  borrarLista(lista:Lista){
    this.deseosService.borrarLista(lista);
  }

}
