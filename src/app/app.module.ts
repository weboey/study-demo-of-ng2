import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HighlightDirective } from './directive/high-light.directive';
import { AppComponent } from './app.component';
import { MarkdownParseComponent } from './markdown-parse/markdown-parse.component';
import { HttpModule }    from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,HighlightDirective, MarkdownParseComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
