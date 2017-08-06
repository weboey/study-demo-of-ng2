import { Injectable,EventEmitter } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import { Http ,Headers,URLSearchParams}    from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  searchEvent:EventEmitter<ProductSearchParams> = new EventEmitter();

  getAllCategories():string[]{
    return ["电子产品","硬件设备","图书"]
  }

  getProducts():Observable<Product[]>{
    let mheaders:Headers = new Headers();
    mheaders.append("Authorization","basic 122312412");
    return this.http.get("api/products")
      .map(res => {console.log(res);return res.json()});
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get("api/product/"+id)
      .map(res => {console.log(res);return res.json()});
  }

    search(params:ProductSearchParams):Observable<Product[]>{
     // return this.http.get("api/products",{search:this.encodeParams(params)})
      return this.http.post("api/products",{search:params})
     // return this.http.post("api/productsQ",params)
        .map(res => {console.log(res);return res.json()})

    }

    private  encodeParams(params:ProductSearchParams){
      let result:URLSearchParams;
      result = Object.keys(params)
        .filter(key=> params[key])
        .reduce((sum:URLSearchParams,key:string) =>{
          sum.append(key,params[key]);
          return sum;
        },new URLSearchParams());
      return result;
    }
/*  getCommentsForProductId(id:number):Observable<Comment[]>{
    return http.get("api/product/"+id)
      .map(res => {console.log(res);return res.json()});
  }*/

  //public register(user: User){
  //  console.log(user);
  //
  //  //向后台post数据的写法如下
  //  // let data = new URLSearchParams();
  //  // data.append('email', user.email);
  //  // data.append('password', user.password);
  //  // return this.http.post(this.userRegisterURL,data);
  //
  //  return this.http
  //    .get(this.userRegisterURL)
  //    .map((response: Response) => {
  //      let user = response.json();
  //      localStorage.setItem("currentUser",JSON.stringify(user));
  //      this.subject.next(user);
  //    });
  //}
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public reting:number,
    public desc:string,
    public categories:Array<string>
  ){}
}


export class ProductSearchParams{
  constructor(
    public title:string,
    public price:number,
    public category:string
  ){}
}
