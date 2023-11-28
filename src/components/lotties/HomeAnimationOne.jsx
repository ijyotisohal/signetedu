import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/lottie-home-one.json';
export default function HomeAnimationOne() {
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
          height={"90%"}
          width={"90%"}
        />
      </div>
    );
  }

 