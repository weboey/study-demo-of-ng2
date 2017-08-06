import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validators,FormControl} from '@angular/forms';
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //students:string[]=['xiaoming','xiaohong','xiaohei'];
  //student:string='';

  formModel:FormGroup;

  categories:string[];

  constructor(private productService:ProductService) {
    let fb = new FormBuilder();
    this.formModel= fb.group({
      title:["第2个",Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      category:["-1"],
    })
  }

  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null
    }
    let price = parseInt(control.value);

    if(price > 0){
      return null
    }else{
      return {positiveNumber:true}
    }
  }

  ngOnInit() {
    this.categories=this.productService.getAllCategories();
  }

  doSearch(){
    console.log(this.formModel.value);
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }
}
