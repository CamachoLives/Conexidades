import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-conexidades',
  standalone: true, 
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './conexidades.html',
  styleUrls: ['./conexidades.css'] 
})
export class Conexidades implements AfterViewInit {
  Usuario = 'Administrador';
  today: string;
  identificacion = '860037422';
  razonSocial = 'Incocrédito - Asociación sin ánimo de lucro';
  correo = 'Conexiones@incocredito.com';
  listaRiesgo = 'N/A';
  listaRestrictiva = 'N/A';

  displayedColumns: string[] = ['nombre', 'categoria', 'ciudad'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const anio = hoy.getFullYear();
    this.today = `${dia}/${mes}/${anio}`;
  }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}

export interface Comercio {
  nombre: string;
  categoria: string;
  ciudad: string;
}

const ELEMENT_DATA: Comercio[] = [
  { nombre: 'Comercio 1', categoria: 'Retail', ciudad: 'Bogotá' },
  { nombre: 'Comercio 2', categoria: 'Servicios', ciudad: 'Medellín' },
  { nombre: 'Comercio 3', categoria: 'Servicios', ciudad: 'Cali' },
  { nombre: 'Comercio 4', categoria: 'Servicios', ciudad: 'Bucaramanga' },
  { nombre: 'Comercio 5', categoria: 'Servicios', ciudad: 'Soacha' },
  { nombre: 'Comercio 6', categoria: 'Servicios', ciudad: 'Tunja' },
  { nombre: 'Comercio 7', categoria: 'Servicios', ciudad: 'Tolu' },
  { nombre: 'Comercio 8', categoria: 'Servicios', ciudad: 'Tulua' },
  { nombre: 'Comercio 9', categoria: 'Servicios', ciudad: 'Cartago' },
  { nombre: 'Comercio 10', categoria: 'Servicios', ciudad: 'Armenia' },
  { nombre: 'Comercio 11', categoria: 'Servicios', ciudad: 'Pereira' },
  { nombre: 'Comercio 12', categoria: 'Servicios', ciudad: 'Ibague' },
  { nombre: 'Comercio 13', categoria: 'Servicios', ciudad: 'Risaralda' },
  { nombre: 'Comercio 14', categoria: 'Servicios', ciudad: 'Tumaco' },
  { nombre: 'Comercio 15', categoria: 'Servicios', ciudad: 'Pasto' },
  { nombre: 'Comercio 16', categoria: 'Servicios', ciudad: 'Barrancabermeja' },

];




