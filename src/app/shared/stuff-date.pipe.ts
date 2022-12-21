import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stuffDate'
})
export class StuffDatePipe implements PipeTransform {

  transform(value): string {
    const today = Date.now()/1000;
    const entryDate = value.seconds;
    const entryDateString = new Date(value.seconds * 1000).toDateString();
    const timeSinceEntryInSec = today - entryDate;
    const hourInSec = 3600;
    const dayInSec  = 86400;
    const weekInSec = 604800;
    const monthInSec = 2419200;
    if(timeSinceEntryInSec < 60 ){
      return `${(timeSinceEntryInSec).toFixed(0)} seconds ago`;
    }else if(
      timeSinceEntryInSec > 60 &&
      timeSinceEntryInSec < hourInSec
    ){
      return `${(timeSinceEntryInSec/60).toFixed(0)} mins ago`;
    }else if(
      timeSinceEntryInSec > hourInSec &&
      timeSinceEntryInSec < dayInSec
    ){
      return `${(timeSinceEntryInSec/hourInSec).toFixed(0)} hrs ago`;
    }else if(
      timeSinceEntryInSec > dayInSec &&
      timeSinceEntryInSec < weekInSec
    ){
      return `${(timeSinceEntryInSec/dayInSec).toFixed(0)} days ago, ${entryDateString}`;
    }else if(
      timeSinceEntryInSec > weekInSec &&
      timeSinceEntryInSec < monthInSec
    ){
      return `${(timeSinceEntryInSec/weekInSec).toFixed(0)} weeks ago, ${entryDateString}`;
    }else if(
      timeSinceEntryInSec > monthInSec &&
      timeSinceEntryInSec < (monthInSec * 12)
    ){
      return `${(timeSinceEntryInSec/monthInSec).toFixed(0)} months ago, ${entryDateString}`;
    }else{
      return `${(timeSinceEntryInSec/(monthInSec * 12)).toFixed(0)} years ago, ${entryDateString}`;
    };
  };
};
