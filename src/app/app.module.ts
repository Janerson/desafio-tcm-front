import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderInterceptorModule } from './interceptors/loader-interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,   
    LoaderInterceptorModule,
    HttpErrorInterceptor
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
