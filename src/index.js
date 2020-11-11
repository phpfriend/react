// import React from 'react';
import ReactDOM from 'react-dom';
import nightImage from "./images/night.jpg";
import noonImage from "./images/afternoon.png";
import eveningImage from "./images/evening.jpg";
import mngImage from "./images/morning.jpg";

let myName = 'Yogesh';
let sirName = 'Tiwari';
let nightTime = "Night";
let noonTime = 'Afternoon';
let morningtime = 'Morning';
let eveTime = 'Evening';
let starStr = 'Good';
let myString = "Hello"+" "+ myName +" "+ sirName;
let curTime =  new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true });
let res = curTime.split(" ");
let specialString = '';
let finalImage = '';


switch(res[1]){
  case 'AM':
    if(res[0]<= 3){
      specialString = starStr +" " + nightTime;
      finalImage = nightImage;
    } else if(res[0]>= 3 || res[0]<= 11){
      specialString = starStr +" " + morningtime;
      finalImage = mngImage;
    }
    break;
  case 'PM': 
  if(res[0]>= 12 || res[0]<= 4){
    specialString = starStr +" " + noonTime;
    finalImage = noonImage;
  } else if(res[0]>= 5 || res[0]<= 8){
    specialString = starStr +" " + eveTime;
    finalImage = eveningImage;
  } else if(res[0]>= 8){
    specialString = starStr +" " + nightTime;
    finalImage = nightImage;
  }
  break; 
  default:
}

ReactDOM.render(
  <>
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
  <h1>{myString }</h1>
  </div>
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
  <h2>{specialString}</h2> 
  </div>
  
  <div style={{
    backgroundImage: `url(${finalImage})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "#f5f5f5"
  }}>
  
  </div>  
  </>,
  document.querySelector("#root")
);


