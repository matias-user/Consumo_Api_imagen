import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainService } from "../services/main.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private mainService:MainService ) { }

  buscar():void{

    const valor = this.txtBuscar.nativeElement.value;

    if( valor.trim().length === 0 ) return;

    this.mainService.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = "";
  }
}
