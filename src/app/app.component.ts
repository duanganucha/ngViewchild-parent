import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0 ;
  title = 'Hello Duanganucha Bootchat';

  onClickCount(){
    this.count = this.count + 1;
  }
  onChangedCount1(countValue){
    console.log(countValue)
    this.count = countValue;
  }
}
