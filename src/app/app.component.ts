import { Component, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  europe: string;
  america: string;
  india: string;
  date: Date = new Date();
  options: any;
  constructor() {
    this.options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric"
    };
    //on page load, display current time
    this.india = new Date().toLocaleString(
      "en-US",
      this._merge(this.options, { timeZone: "Asia/Kolkata" })
    );
    this.europe = new Date().toLocaleString(
      "en-US",
      this._merge(this.options, { timeZone: "Europe/Berlin" })
    );
    this.america = new Date().toLocaleString(
      "en-US",
      this._merge(this.options, { timeZone: "America/Los_Angeles" })
    );
  }
  _merge(ob1, ob2) {
    let target = Object.assign(ob1, ob2);
    return target;
  }
  ngOnInit() {}
  receiveMessage($event) {
    //when date-time is selected from the plugin
    this.india = this.changeTimezone($event, "Asia/Kolkata");
    this.europe = this.changeTimezone($event, "Europe/Berlin");
    this.america = this.changeTimezone($event, "America/Los_Angeles");
  }
  changeTimezone(evt, ianatz) {
    let invdate = new Date(evt.zoneDate).toLocaleString("en-US", {
      timeZone: ianatz
    });
    let selCitydate = new Date(evt.zoneDate).toLocaleString("en-US", {
      timeZone: evt.city
    });
    let diff = new Date(selCitydate).getTime() - new Date(invdate).getTime();
    let calculatedDate = new Date(new Date(evt.zoneDate).getTime() - diff);
    let date = calculatedDate
      .toString()
      .split(" ", 4)
      .join(", ");
    let time = calculatedDate
      .toString()
      .split(" ", 5)
      .pop();
    return date + " " + this.convertStringToTime(time);
  }
  convertStringToTime(time) {
    let [hours, minutes, seconds] = time.split(":");
    if (hours > 12) hours = hours - 12 + ":" + minutes + " PM";
    else hours = hours + ":" + minutes + " AM";
    return hours;
  }
}
