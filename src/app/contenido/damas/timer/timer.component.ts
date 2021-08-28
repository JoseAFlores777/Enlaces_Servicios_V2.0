import { Component, OnInit } from '@angular/core';
import * as countdown from 'countdown';

interface Time{
  days?: number ,
  hours?: number,
  minutes?: number,
  seconds?: number,
}



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time: Time = {
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
  };

  timerId: any = null;

  constructor() { }

  ngOnInit(): void {
    let date = new Date("Fri Sep 03 2021 00:00:00 GMT-0600");

    this.timerId = countdown(date, (ts) => {
      // this.time = ts;
      // console.log(ts)
      this.time.days = ts.days;
      this.time.hours = ts.hours;
      this.time.minutes = ts.minutes;
      this.time.seconds = ts.seconds;
    },countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS)

     console.log(countdown(date))
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.timerId) {
      clearInterval(this.timerId)
    }
  }
}
