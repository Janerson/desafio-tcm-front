import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from "ngx-bootstrap/popover";
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { StatusEnvioPipe } from './pipes/status-envio.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertService } from '../services/alert.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    StatusEnvioPipe,
    HighlightPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    NgxLoadingModule.forRoot({
      fullScreenBackdrop : true,
      animationType:ngxLoadingAnimationTypes.threeBounce,
      primaryColour:"#068bcd",
      secondaryColour:"#ca981f"
    }),
    ToastrModule.forRoot({
      progressBar: true,
    }),
  ],
  exports:[
    StatusEnvioPipe,
    HighlightPipe,
    LoaderComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PaginationModule,
    PopoverModule,
    AlertModule,
    ButtonsModule
  ],
  providers:[AlertService]
})
export class SharedModule { }
