import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productmattress',
  templateUrl: './productmattress.component.html',
  styleUrls: ['./productmattress.component.css']
})
export class ProductmattressComponent implements OnInit {

  @Input() dataM:any ={}
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(){

    this.item.emit({item:this.dataM, quantity:this.amount});
  }

}
