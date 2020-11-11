// import React from 'react';
import ReactDOM from 'react-dom';

let myName = 'Yogesh';
let sirName = 'Tiwari';
let nightTime = "Night";
let noonTime = 'Afternoon';
let morningtime = 'Morning';
let eveTime = 'Evening';
let starStr = 'Good';
let myString = "Hello"+ myName +" "+ sirName;
let curTime =  new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
let res = curTime.split(" ");
let specialString = '';

switch(res[1]){
  case 'AM':
    if(res[0]<= 3){
      specialString = starStr +" " +nightTime;
    } else if(res[0]>= 3 || res[0]<= 11){
      specialString = starStr +" " +morningtime;
    }
    break;
  case 'PM': 
  if(res[0]>= 12 || res[0]<= 4){
    specialString = starStr +" " +noonTime;
  } else if(res[0]>= 5 || res[0]<= 8){
    specialString = starStr +" " +eveTime;
  } else if(res[0]>= 8){
    specialString = starStr +" " +nightTime;
  }
  break; 
  default:
}

ReactDOM.render(
  <>
  <h1>{myString }</h1>
  <h2>{specialString}</h2>  
  </>,
  document.querySelector("#root")
);


