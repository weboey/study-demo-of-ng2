import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  HighlightDirective } from './directive/high-light.directive';
import { AppComponent } from './app.component';
import { MarkdownParseComponent } from './markdown-parse/markdown-parse.component';
import { HttpModule }    from '@angular/http';
import { ProductComponent } from './http/product/product.component';
import { WebSocketComponent } from './http/web-socket/web-socket.component';
import {WebSocketService} from "./http/web-socket.service";
import {ProductService} from "./http/product/service/product.service";
import { SearchComponent } from './http/product/search/search.component';
import { MergeMapComponent } from './rxjs/mergeMap/merge-map.component';
import { ForkJoinComponent } from './rxjs/forkJoin/fork-join.component';
@NgModule({
  declarations: [
    AppComponent,HighlightDirective, MarkdownParseComponent, ProductComponent, WebSocketComponent, SearchComponent,
    MergeMapComponent,ForkJoinComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule,ReactiveFormsModule  //<-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [WebSocketService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
