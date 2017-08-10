/**
 * Created by Administrator on 2017/8/11.
 */

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-rxjs-merge-map',
  template: `
    <p>{{username}} Detail Info</p>
    {{user | json}}
  `
})
export class MergeMapComponent implements OnInit {
  constructor(private http: Http) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  username: string = '';

  user: any;

  ngOnInit() {
/*    this.http.get(this.apiUrl)
      .map(res => res.json())
      .subscribe(users => {
        let username = users[6].username;
        this.http.get(`${this.apiUrl}?username=${username}`)
          .map(res => res.json())
          .subscribe(
            user => {
              this.username = username;
              this.user = user;
            });
      });*/

    this.http.get(this.apiUrl)
      .map(res => res.json())
      .mergeMap(users => {
        this.username = users[6].username;
        return this.http.get(`${this.apiUrl}?username=${this.username}`)
          .map(res => res.json())
      })
      .subscribe(user => this.user = user);
  }
}
