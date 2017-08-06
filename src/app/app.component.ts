import { Component,OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { createTodoItem } from './helper/todo-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  ngOnInit():void {

  }
}
/*setTimeout(function(){
  const $input = <HTMLInputElement>document.querySelector(".todo-val");
  const $list = <HTMLUListElement> document.querySelector(".list-group");
  const $add =  document.querySelector(".button-add");

  const enter$ = Observable.fromEvent<KeyboardEvent>($input,'keydown')
    .filter(r => r.keyCode===13)
    .do(e=>{console.log(e),console.log(input$,$input.value)})

  const clickAdd$ = Observable.fromEvent<MouseEvent>($add,'click')

  const input$ = enter$.merge(clickAdd$);

  const app$ = input$
    .map(()=>$input.value)
    .filter(r=>r!=='')
    .map(createTodoItem)
    .do((ele:HTMLElement)=>{
      $list.appendChild(ele);
      $input.value='';

    })
    .do(r=>console.log(r))

  app$.subscribe();
},0)*/

