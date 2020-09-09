import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Shopping List';
  products = [
    {name: "Cheese", quantity:"four"},
    {name: "Juice", quantity:"two"},
    {name: "Apples", quantity:"thirty"},
  ];
  model:any={};
  model2:any={};
  addProduct(){
    this.products.push(this.model);
    this.model = {};
  }
  deleteProduct(i){
    this.products.splice(i, 1)
  
  }
  myValue;
  editProduct(k){
    this.model2.name = this.products[k].name;
    this.model2.quantity = this.products[k].quantity;
    this.myValue = k;
  }
  updateProduct(){
    let k= this.myValue;
    for(let i=0; i<this.products.length;i++){
      if(i==k){
        this.products[i]= this.model2;
        this.model2 = {};
      }
    }
  }
}
