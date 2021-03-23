import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { DatosMascotasService } from '../datos-mascotas.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  
  cosasTienda: any =[];
  constructor(private ds: DatosMascotasService) {
  }

  ngOnInit(): void {
    this.ds.getRuta().subscribe((cosasTienda: any)=>{this.cosasTienda=cosasTienda});
  }
}
