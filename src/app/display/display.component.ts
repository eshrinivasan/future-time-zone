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
  	this.options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute: 'numeric'};
	this.world_timezones = [
      'Australia/Sydney',
      'Europe/Brussels',
      'America/St_Johns',
      'America/Toronto',
      'America/Vancouver',
      'Asia/Shanghai',
      'Europe/Prague',
      'Europe/Berlin',
      'Europe/Paris',
      'Europe/London',
      'Europe/Athens',
      'Asia/Hong_Kong',
      'Europe/Budapest',
      'Europe/Dublin',
      'Asia/Tehran',
      'Europe/Rome',
      'America/Mexico_City',
      'Asia/Kuala_Lumpur',
      'Europe/Amsterdam',
      'Asia/Singapore',
      'America/New_York',
      'America/Los_Angeles',
      'Asia/Ho_Chi_Minh'
    ];
  }
  // Choose city using select dropdown
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
  ngOnChanges(changes: SimpleChanges) {
	//on date select, display corresponding time depending on zone
  	this.zone = new Date(changes['date'].currentValue).toLocaleString("en-US", this._merge(this.options, {timeZone: this.selectedCity}));
  }
}
