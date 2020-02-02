import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  europe: string;
  america: string;
  india: string;
  date: Date = new Date();
  options: any;
  constructor(){
     this.options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute: 'numeric'};
     //on page load, display current time
     this.india = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: "Asia/Kolkata"}));
     this.europe = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: "Europe/Berlin"}));
     this.america = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: "America/New_York"}));
  }
  _merge(ob1, ob2){
     let target = Object.assign(ob1, ob2);
     return target;
  }
  ngOnInit(){
    
  }
  receiveMessage($event){
     this.india = this.changeTimezone($event, 'Asia/Kolkata');
     this.europe = this.changeTimezone($event, 'Europe/Berlin');
     this.america = this.changeTimezone($event, 'America/New_York');
  }

  changeTimezone(evt, ianatz) {
       var invdate = new Date(evt.zoneDate).toLocaleString('en-US', {
         timeZone: ianatz
       });

       var selCitydate = new Date(evt.zoneDate).toLocaleString('en-US', {
         timeZone: evt.city
       });

       var diff = new Date(selCitydate).getTime() - new Date(invdate).getTime();
       var calculatedDate = new Date(new Date(evt.zoneDate).getTime() - diff);
       return calculatedDate.toLocaleString("en-US",this._merge(this.options, {timeZone: ianatz}))
  }
}
