import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  get resultados (){
    return this.mainService.resultados;
  }
  constructor( private mainService: MainService ) { }

  

}
