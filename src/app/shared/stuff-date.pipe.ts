import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stuffDate'
})
export class StuffDatePipe implements PipeTransform {

  transform(value,timeFrame = 'timeSinceItemEntry'): string {
    if(!value.seconds){
      return `something went wrong with value.name's expiration date`;
    }
    let stuffTimeInSecs;
    const today = Date.now()/1000;
    const entryDate = value.seconds;
    const entryDateString = new Date(value.seconds * 1000).toDateString();
    if(timeFrame != 'timeSinceItemEntry'){
      stuffTimeInSecs = entryDate - today;
    }else{
      stuffTimeInSecs = today - entryDate;
    }
    const hourInSec = 3600;
    const dayInSec  = 86400;
    const weekInSec = 604800;
    const monthInSec = 2419200;
    if(
      stuffTimeInSecs < hourInSec
    ){
      return `less then an hour`;
    }else if(
      stuffTimeInSecs > hourInSec &&
      stuffTimeInSecs < dayInSec
    ){
      return `${(stuffTimeInSecs/hourInSec).toFixed(0)} hrs`;
    }else if(
      stuffTimeInSecs > dayInSec &&
      stuffTimeInSecs < weekInSec
    ){
      return `${(stuffTimeInSecs/dayInSec).toFixed(0)} days, ${entryDateString}`;
    }else if(
      stuffTimeInSecs > weekInSec &&
      stuffTimeInSecs < monthInSec
    ){
      return `${(stuffTimeInSecs/weekInSec).toFixed(0)} weeks, ${entryDateString}`;
    }else if(
      stuffTimeInSecs > monthInSec &&
      stuffTimeInSecs < (monthInSec * 12)
    ){
      return `${(stuffTimeInSecs/monthInSec).toFixed(0)} months, ${entryDateString}`;
    }else{
      return `${(stuffTimeInSecs/(monthInSec * 12)).toFixed(0)} years, ${entryDateString}`;
    };
  };
};
