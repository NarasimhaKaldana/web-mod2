import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnChanges,OnDestroy {
  ngOnInit(): void {
   // throw new Error('ngOnit.');
    console.log('ngOnit.');
  }
  ngOnChanges(changes: SimpleChanges): void {
   // throw new Error('ngOnChanges.');
   console.log('ngOnChanges.');
  }
  ngOnDestroy(): void {
    //throw new Error('ngOnDestroy.');
    console.log('ngOndestroy.');
  }
  constructor(){
    console.log('from constructor');
  }
  


  productId: number = 127676;
  description = "Apple Mac Book - Retina eye";
  qty : number = -1;
  price: number = 1800000.00;
  // available: boolean = false;
  available: string = 'green';
  isAvailable=true;
  Notavailable: string = 'red';
  delivery : string = 'brown';
  orderedQty: number = 0;
  isMember = true;
  isQtyAvailable = this.qty > 0;
  

  

  takeOrder():void{
    console.log('order placed.....');
    console.log('Quantity placed',this.orderedQty);
  }

  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];

items : Item[]=[
  new Item(1,'iphone','smartphone',100000,2),
  new Item(1,'samsung','smartphone',20000,3),
  new Item(1,'oneplus','smartphone',14000,5)




  



]






}

  