import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  direccion: String;
  texto: String;
  desaparecer: Boolean;
  angular: Boolean;
  js: Boolean;

  constructor() { 
    this.direccion = "assets/imgs/logo1.png";
    this.texto = "Ocultar";
    this.desaparecer = false;
    this.angular = false;
    this.js = false;
  }

  ngOnInit(): void {
  }

  cambiarDirAngular() {
    if(!this.angular){
      this.direccion = "assets/imgs/logo2.png";
    }
    else {
      this.direccion = "assets/imgs/logo1.png";
    }
    this.angular = !this.angular;
  }

  @ViewChild("imgjs") imgDOM!: ElementRef;

  cambiarDirJs() {
    if(!this.js){
      this.imgDOM.nativeElement.src="assets/imgs/logo2.png";
    }
    else {
      this.imgDOM.nativeElement.src="assets/imgs/logo1.png";
    }
    this.js = !this.js;
  }

  cambiarDesaparecer() {
    this.desaparecer = !this.desaparecer;

    if(this.desaparecer){
      this.texto = "Mostrar";
    } else{
      this.texto = "Ocultar";
    }

  }
}
