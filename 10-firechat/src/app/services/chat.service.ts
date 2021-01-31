import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Mensaje } from '../interface/mensaje.interface';

import { map } from "rxjs/operators";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats:Mensaje[] = [];
  usuario:any = {};

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {

    this.auth.authState.subscribe(user=>{
      console.log(user);
    
      if(!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(proveedor:string) {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {

    this.usuario = {};
    this.auth.signOut();
  }

  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy("fecha",'desc')
                                                                          .limit(5));

    return this.itemsCollection.valueChanges()
                                .pipe(
                                  map((mensajes:Mensaje[])=>{
                                    console.log(mensajes); 

                                    this.chats=[];

                                    for(let mensaje of mensajes){
                                      this.chats.unshift(mensaje);
                                    }
                                                                       
                                  }));
  }

  agregarMensaje(texto:string){

    let mensaje:Mensaje={
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje);
  }
}
