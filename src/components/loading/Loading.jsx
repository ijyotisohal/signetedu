import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/animation_ljy5ueku.json';
export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <div className='loading-logo'>
          <div  >
        <Lottie 
          options={defaultOptions}
          height={"330px"}
          width={"330px"}
        />
        <h4>Please Wait Your Data Is being processing </h4>
      </div>
        </div>
    );
  }

 