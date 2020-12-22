import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from './components/usuario/usuario.component';

import { usuario_routes } from "./components/usuario/usuario.routes";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: usuario_routes
    },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);