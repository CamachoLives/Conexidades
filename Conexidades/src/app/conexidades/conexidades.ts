import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conexidades',
  imports: [CommonModule, RouterModule],
  templateUrl: './conexidades.html',
  styleUrl: './conexidades.css',
})


export class Conexidades {

  Usuario = 'Administrador'
  today: string;

  
constructor() {
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const anio = hoy.getFullYear();
    this.today = `${dia}/${mes}/${anio}`;
  }

}
