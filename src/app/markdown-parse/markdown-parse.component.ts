import { Component, OnInit,Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Component({
  selector: 'app-markdown-parse',
  template: '<div [innerHTML]="mdSource"></div>',
  styleUrls: ['./markdown-parse.component.css']
})
export class MarkdownParseComponent implements OnInit {

  @Input() mdSource:string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.mdSource="<h1>this is a test</h1>";
    console.log(window);
    this.http.get("http://localhost:63342/learn-rxjs-ng2/README.md")
      .subscribe(text=>{this.mdSource=window.marked(text._body); console.log(text)})
    //.map(response=>{return response._body})
    //
  }
  //read(files){
  //  //<input type="file" (change)="read($event)">
  //  debugger;
  //  var reader = new FileReader();//new一个FileReader实例
  //  let file=files.target.files[0];
  //  reader.readAsText(file);
  //  reader.onload = function() {
  //    console.log(this);
  //  }
  //}

}
