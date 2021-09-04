import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from "ngx-bootstrap/popover";
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
    PaginationModule,
    PopoverModule,
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
    ReactiveFormsModule,
    PaginationModule,
    PopoverModule,
  ],
  providers:[AlertService]
})
export class SharedModule { }
