import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() date: string;
  cityName = new FormControl('');
  zone: string;
  selectedCity: string;
  options: any;
  world_timezones: any;

  constructor() {
  	this.options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute: 'numeric'};
	this.world_timezones = [
      'Australia/Sydney',
      'Asia/Shanghai',
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
      'Europe/Athens',
      'Europe/Budapest',
      'Europe/Dublin',
      'Europe/Rome',
      'Europe/Amsterdam',
      'America/Toronto',
      'America/Vancouver',
      'America/New_York',
      'America/Los_Angeles',  
      'America/Mexico_City'
    ];
  }
  // choose city using select dropdown and update the time for that zone
  changeCity(e) {
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    });

    this.selectedCity = this.cityName.value.split(' ')[1];
    this.zone = new Date(this.date).toLocaleString("en-US", this._merge(this.options, {timeZone: this.selectedCity}));
  }
  _merge(ob1, ob2){
    let target = Object.assign(ob1, ob2);
    return target;
  }
  ngOnInit(){

  }
  //Look for change in time in the first zone, reflect changes in this zone as well
  ngOnChanges(changes: SimpleChanges) {
  	this.zone = new Date(changes['date'].currentValue).toLocaleString("en-US", this._merge(this.options, {timeZone: this.selectedCity}));
  }
}
