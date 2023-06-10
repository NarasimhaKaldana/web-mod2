import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  factorial(n:number){
    var fact=1;
    for(var i=1;i<=n;i++){   
      fact=fact*1;
    }return fact;
  }

 power(b:number, e:number){
  var result=1;
  for(var i=1;i<=e;i++){
    result *=b;
  }return result;
 }




  constructor() { }
}
