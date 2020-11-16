// import React from 'react';
import ReactDOM from 'react-dom';
import nightImage from "./images/night.jpg";
import noonImage from "./images/afternoon.png";
import eveningImage from "./images/evening.jpg";
import mngImage from "./images/morning.jpg";

let myName  = 'Yogesh';
let sirName = 'Tiwari';

let morningtime = 'Morning';
let noonTime    = 'Afternoon';
let eveTime     = 'Evening';
let nightTime   = "Night";
let starStr     = 'Good';
let myString    = `Hello  ${myName} ${sirName}`;
let curTime     =  new Date().getHours(); 

let specialString = '';
let finalImage    = '';

let styleColor= 'black';

if(curTime>=4 && curTime<=11){
  specialString = `${starStr} ${morningtime}`;
  finalImage = mngImage;
} else if(curTime>=12 && curTime<=16){
  specialString = `${starStr}  ${noonTime}`;
  styleColor= 'white';
  finalImage = noonImage;
} else if(curTime>=17 && curTime<=20){
  specialString = `${starStr}  ${eveTime}`;
  finalImage = eveningImage;
  styleColor= 'white'
} else if(curTime>=21){
  specialString = `${starStr} ${nightTime}`;
  finalImage = nightImage;
  styleColor= 'red';
} else if(curTime<=3){
  specialString = `${starStr} ${nightTime}`;
  finalImage = nightImage;
  styleColor= 'red';
}


ReactDOM.render(
  <>
   
    <div style={{ backgroundImage: `url(${finalImage})`,backgroundSize: "cover",height: "100vh"}}>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center", color:styleColor}}>
        <h1>{myString }</h1>
      </div>
      <div style={{display: "flex",justifyContent: "center",alignItems: "center", color:styleColor}}>
        <h2>{specialString}</h2> 
      </div>  
    </div>  
  </>,
  document.querySelector("#root")
);


