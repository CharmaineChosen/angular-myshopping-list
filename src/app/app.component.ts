import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Shopping List';
  employees = [
    {name: "Cheese", position:"four"},
    {name: "Juice", position:"two"},
    {name: "Apples", position:"thirty"},
  ];
  model:any={};
  model2:any={};
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
  }
  deleteEmployee(i){
    this.employees.splice(i, 1)
  
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }
}
