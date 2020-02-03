
# FutureTimeZone

### Idea:

This idea came about while setting up a meeting common to 3 locations in differnt timezones. There needed to have an ability to choose a time of a specific location and see the corresponding time in the other 2 locations to see if its a mutually convenient time to set up a meeting.

### Technology decisions:

Angular was chosen because of its cli and ability to create a new folder structure easily. Moreover this application does not require a backend and would work as a single page application. angular2-datetimepicker plugin was chosen so that date and time can be chosen and a callback to handle the action in response to selecting a timezone was provided. Bootstrap is used as a css framework for styling of the app without much of custom css. This app being a front end application could be hosted on github pages with few commands like "ng deploy". Note: Heroku deployment of angular 8 app was throwing errors and it doesn't seem to be compatible to latest angular yet.

### How it works

User interacts with a select dropdown with prechosen locations across the world in different timezones. The date-time picker shows the current time at the chosen location. User can choose a future date and time using the angular timepicker plugin. The other predefined locations on the page reflect the respective time.

The DisplayComponent hosts the select dropdown and the angular timepicker plugin. Choosing a value from select dropdown calls the changeCity method in the display component and updates the date variable which is the input for the angular2-datetimepicker plugin.

On selecting a date from the angular2-datetimepicker plugin, onDateSelect is called and an output event is emitted to the parent AppComponent. The AppComponent while initializing sets up the local time for the predefined locations on the App. It also has the receiveMessage method that catches the event emitted by the OnDateSelect method of the child DisplayComponent and calls the changeTimezone method. receiveMessage -> changeTimezone method gets the date as ISOString emitted from the OnDateSelect method and using toLocaleString calculates the time difference between the location chosen in the dropdown and the predefined location. It then subtracts that difference from the ISOString date that was passed to the receiveMessage method. All through the app the time at a location is arrived by using the toLocaleString method of javascript by passing the timeZone string without using any external libraries like moment.js.

A batchscript.sh file has the steps to create the assets, commit the files to github and deploy the app to github pages.

## Reference

https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
https://angular.io/guide/deployment
https://cuppalabs.github.io/angular2-datetimepicker/#/datetimepicker
https://pages.github.com/