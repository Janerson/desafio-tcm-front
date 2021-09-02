import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusEnvioPipe } from './pipes/status-envio.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';



@NgModule({
  declarations: [
    StatusEnvioPipe,
    HighlightPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StatusEnvioPipe,
    HighlightPipe,
  ]
})
export class SharedModule { }
