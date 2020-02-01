import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  europe: string;
  america: string;
  date: Date = new Date();
  options: any;
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'EEE, MMM dd, yyyy, hh:mm a',
      defaultOpen: false
  }
  constructor(){
     this.options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute: 'numeric'};
     //on page load, display current time
     this.europe = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: "Europe/Berlin"}));
     this.america = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: "America/New_York"}));
  }
  _merge(ob1, ob2){
    let target = Object.assign(ob1, ob2);
    return target;
  }
  ngOnInit(){
    
  }
  onDateSelect(){
      //on date select, display corresponding time depending on zone
  	var localdate = this.date;
     this.europe = new Date(localdate).toLocaleString("en-US", this._merge(this.options, {timeZone: "Europe/Berlin"}));
     this.america = new Date(localdate).toLocaleString("en-US", this._merge(this.options, {timeZone: "America/New_York"}));
  }
}
