import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  entryComponents: [AppComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
