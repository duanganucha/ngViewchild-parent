import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Output() changed = new EventEmitter<number>();


  count :number ;

  constructor() { }

  ngOnInit() {
  }

  onClickCountLocal(){
    this.count = this.count ++ ;



  }

  onClickCountGobal(){
    this.changed.emit(this.count++)
  }
}
