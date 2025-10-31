import { Routes, RouterModule } from '@angular/router';
import { Conexidades } from './conexidades/conexidades';

export const routes: Routes = [
    {path: 'Conexidades', component: Conexidades},
    { path: '**', redirectTo: 'Conexidades' },

];

export const AppRoutingModule = RouterModule.forRoot(routes);
