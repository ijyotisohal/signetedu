import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/tabsjson/proactive.json';
export default function TabFour() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <div>
        <Lottie 
          options={defaultOptions}
          height={"330px"}
          width={"330px"}
        />
      </div>
    );
  }

 