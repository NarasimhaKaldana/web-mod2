import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dbugng';
  a: number = 1;
  b: boolean = true;

  m1(){
    console.log("from m1" +this.a+this.b)
  }

  m2(){
    this.b= false;
    console.log('1'+this.a++);
    console.log('2');
    console.log('3');
    this.m1();
    this.b=true;
    console.log('4'+this.a++);
    console.log('5');
    console.log('6');
    
  }

}
