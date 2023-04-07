import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  number1:any=0;
  result:any=0;
  number2:any=0;
  factorial(number1:number){
      let fact:any=1; 
        for(let i=1;i<=number1;i++){
            fact*=i;
        }
        this.result=fact;
      }
  evenOdd(number2:number){
    
  }   




  numb:number=0;
  result1:string="";
  evenodd(numb:number){
     if(numb % 2 ==0){
      this.result="even";

     }
     else{
      this.result="odd";
     }
    
  }   

}
