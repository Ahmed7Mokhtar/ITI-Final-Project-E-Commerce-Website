import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productelectronic',
  templateUrl: './productelectronic.component.html',
  styleUrls: ['./productelectronic.component.css']
})
export class ProductelectronicComponent implements OnInit {

  @Input() data2:any ={}
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(){

    this.item.emit({item:this.data2, quantity:this.amount});
  }

}
