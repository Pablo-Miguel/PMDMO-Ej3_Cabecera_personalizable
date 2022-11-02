import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  desaparecer: Boolean;
  direccion: String;

  constructor(){
    this.desaparecer = false;
    this.direccion = "assets/imgs/logo1.png";
  }
  
  cambiarDirAngular(direccionHijo: String) {
    this.direccion = direccionHijo;
  }

  @ViewChild("imgjs") imgDOM!: ElementRef;

  cambiarDirJs(direccionHijo: String){
    this.imgDOM.nativeElement.src = direccionHijo;
  }

  cambiarDesaparecer(desaparecerHijo: Boolean) {
    this.desaparecer = desaparecerHijo;
  }

}
