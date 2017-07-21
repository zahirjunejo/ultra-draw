import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the CanvasDraw component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDraw {

  @ViewChild('myCanvas') canvas:any;

  canvasElement:any;
  lastX:number;
  lastY:number;

  currentColour : string = '#0000ff';
  availableColours : any;

  brushSize : number  = 10;

  constructor(public platform:Platform, public renderer:Renderer) {
    console.log("Hello CanvasDraw Component");

    this.availableColours = [
        '#1abc9c',
        '#3498db',
        '#9b59b6',
        '#e67e22',
        '#e74c3c'
    ];
        
  }


  ngAfterViewInit(){
  
  	this.canvasElement = this.canvas.nativeElement;

  	this.renderer.setElementAttribute(this.canvasElement, 
      'width', this.platform.width()+'');
  	this.renderer.setElementAttribute(this.canvasElement, 
      'height', this.platform.height()+'');
  
  }


  changeColour(colour){
    this.currentColour = colour;
  }


  changeSize(size){
    this.brushSize = size;
  }


  handleStart(ev){

    this.lastX = ev.touches[0].pageX;
  	this.lastY = ev.touches[0].pageY;

  }


  handleMove(ev){

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();       

    this.lastX = currentX;
    this.lastY = currentY;

  }

  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }


}
