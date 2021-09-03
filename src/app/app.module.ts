import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from "ngx-bootstrap/popover";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { LoaderInterceptorModule } from './interceptors/loader-interceptor';


@NgModule({
  declarations: [AppComponent, MunicipiosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    LoaderInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
