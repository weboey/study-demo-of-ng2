/**
 * Created by Administrator on 2017/8/11.
 */

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-rxjs-fork-join',
  template: `
    <p>Post Detail Info</p>
    <ul>
      <li>{{post1 | json}}</li>
      <li>{{post2 | json}}</li>
    </ul>
  `
})
export class ForkJoinComponent implements OnInit {
  constructor(private http: Http) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  post1: any;

  post2: any;

  ngOnInit() {
    let post1 = this.http.get(`${this.apiUrl}/1`);
    let post2 = this.http.get(`${this.apiUrl}/2`);

    Observable.forkJoin([post1, post2])
      .subscribe(results => {
        this.post1 = results[0];
        this.post2 = results[1];
      });
  }
}
