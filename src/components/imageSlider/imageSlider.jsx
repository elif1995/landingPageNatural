import React from 'react';
import { Carousel } from 'antd';
import "antd/dist/antd.css";
import './imageSlider.css'
import firstImage from '../../img/imageSlider/Nature-craft-supplies-1-600x450.jpg';

// const contentStyle = {
//   height: '360px',
//   color: '#fff',
//   lineHeight: '360px',
//   textAlign: 'center',
//   backgroundColor: 'burlywood'
// };




const imageSlider = () => {
  return (
    <div className="image-slider">
        <h1 className="slider-title" >קבלי הצצה:</h1>
          
      <Carousel autoplay >
        <div className="image-slider-inner">
        <div className="image-slider-flex">
          <div>
          <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          </div>
          <img className="side-image-1" />
          
        </div>
        </div>
        <div className="image-slider-inner">
        
        <div className="image-slider-flex">
        <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          <img className="side-image-2"/>
          
          
        </div>
        </div>
        <div className="image-slider-inner">
        
        <div className="image-slider-flex">
          <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          <img className="side-image-3"/>
          
        </div>
        </div>
        <div className="image-slider-inner">
          
        <div className="image-slider-flex">
          <h1 className="side-content"> המוצר המוצר המוצר המוצר המוצר</h1>
          <img className="side-image-4"/>
          
        </div>
        </div>
      </Carousel>
    </div>
  )
}

export default imageSlider