import './SeasonDisplay.css'
import React from "react";


const seasonConfig ={
    summer:{
        text:"Let's hit the beach!",
        iconName:'sun'
    },
    winter:{
        text:"It's Cold Man!, It is Winter!",
        iconName: 'winter'
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} =seasonConfig[season];
//   const text =
//     season === "winter"
//       ? "It is Cold man!, It is winter"
//       : "Lets hit the beach, it is Summer";
//   const icon = season === "winter" ? "snowflake" : "sun";



  // console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
