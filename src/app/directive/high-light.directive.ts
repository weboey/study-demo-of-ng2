/**
 * Created by Administrator on 2017/7/26.
 */
import { Directive, ElementRef, Input,OnInit } from '@angular/core';
import { TemplateRef,ViewContainerRef } from '@angular/core';
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective implements OnInit{
  private el:ElementRef;
  constructor(el: ElementRef,
            //  templateRef:TemplateRef<any>,
              viewRef:ViewContainerRef
  ) {
    debugger;
    console.log(el.nativeElement.innerHTML);
   // console.log(templateRef);
    this.el=el;
    console.log(viewRef);
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit():void {
    debugger;
    console.log(this.el.nativeElement.innerHTML);
    this.el.nativeElement.innerHTML="www.baidu.com";
  }

}
