import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeGenerationComponent } from './code-generation/code-generation.component';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CodeGenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
