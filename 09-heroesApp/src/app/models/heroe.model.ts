import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class HeroeModel{

    id: string;
    nombre: string;
    poder: string;
    vivo: boolean;

    constructor(){
        this.vivo = true;
    }

}