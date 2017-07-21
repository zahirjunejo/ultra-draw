import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CanvasDraw } from './canvas-draw';

@NgModule({
  declarations: [
    CanvasDraw,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CanvasDraw
  ]
})
export class CanvasDrawModule {}
