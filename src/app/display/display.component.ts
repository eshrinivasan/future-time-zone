import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //@Output() date: string;
  @Output() messageEvent = new EventEmitter<object>();
  date: Date = new Date();
  cityName = new FormControl('');
  zone: string;
  newZone: string;
  selectedCity: string;
  options: any;
  world_timezones: any;
  europe: string;
  america: string;
  india:string;
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'EEE, MMM dd, yyyy, hh:mm a',
      defaultOpen: false
  }
  constructor() {
  	this.options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour:'numeric', minute: 'numeric'};
  	this.world_timezones = [
        'Australia/Sydney',
        'Asia/Kolkata',
        'Asia/Kuala_Lumpur',
        'Asia/Singapore',
        'Asia/Seoul',
        'Asia/Hong_Kong',
        'Asia/Tehran',
        'Asia/Ho_Chi_Minh',
        'Europe/Brussels',
        'Europe/Prague',
        'Europe/Paris',
        'Europe/London',
        'Europe/Sofia',
        'Europe/Budapest',
        'Europe/Dublin',
        'Europe/Berlin',
        'America/Chicago',
        'America/Toronto',
        'America/Vancouver',
        'America/New_York',
        'America/Los_Angeles',  
        'America/Mexico_City'
      ];
  }
  //choose city using select dropdown and update the time for that zone
  changeCity(e) {
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    });
    this.selectedCity = this.cityName.value.split(' ')[1];
    this.zone = new Date().toLocaleString("en-US", this._merge(this.options, {timeZone: this.selectedCity}));
    this.date = new Date(this.zone);
  }
  _merge(ob1, ob2){
    let target = Object.assign(ob1, ob2);
    return target;
  }
  onDateSelect(){
  	this.newZone = new Date(this.date).toISOString();
  	//on date select, emit changed date-time to parent
   	this.messageEvent.emit({zoneDate: this.newZone, city: this.selectedCity});
  }
  ngOnInit(){

  }
 
}
