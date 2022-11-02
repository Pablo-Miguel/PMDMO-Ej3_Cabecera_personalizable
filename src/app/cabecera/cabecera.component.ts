import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() cambiarAngular = new EventEmitter<String>();
  @Output() cambiarJs = new EventEmitter<String>();
  @Output() desaparecerOutput = new EventEmitter<Boolean>();

  texto: String;
  desaparecer: Boolean;
  angular: Boolean;
  js: Boolean;

  constructor() { 
    
    this.texto = "Ocultar";
    this.desaparecer = false;
    this.angular = false;
    this.js = false;
    
  }

  ngOnInit(): void {
  }

  cambiarDirAngular() {
    if(!this.angular){
      this.cambiarAngular.emit("assets/imgs/logo2.png");
    }
    else {
      this.cambiarAngular.emit("assets/imgs/logo1.png");
    }
    this.angular = !this.angular;
  }

  @ViewChild("imgjs") imgDOM!: ElementRef;

  cambiarDirJs() {
    if(!this.js){
      this.cambiarJs.emit("assets/imgs/logo2.png");
    }
    else {
      this.cambiarJs.emit("assets/imgs/logo1.png");
    }
    this.js = !this.js;
  }

  cambiarDesaparecer() {
    this.desaparecer = !this.desaparecer;

    this.desaparecerOutput.emit(this.desaparecer);

    if(this.desaparecer){
      this.texto = "Mostrar";
    } else{
      this.texto = "Ocultar";
    }

  }
}
