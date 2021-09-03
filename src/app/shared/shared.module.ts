import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

import { StatusEnvioPipe } from './pipes/status-envio.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    StatusEnvioPipe,
    HighlightPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop : true,
      animationType:ngxLoadingAnimationTypes.threeBounce,
      primaryColour:"#068bcd",
      secondaryColour:"#ca981f"
    })
  ],
  exports:[
    StatusEnvioPipe,
    HighlightPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
