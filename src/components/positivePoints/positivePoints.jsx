import React from 'react';
import './positivePoints.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import  PointsContext  from '../../context/pointsContext.jsx'




const PositivePoints = () => {

  const {points} = useContext(PointsContext)
  

  
  return (
    <div className="positive-points">
        
      <div className="positive-points-container">
        <h1>החוזקות שלנו</h1>
        <div className="positive-points-inner">
        {points.map(({content}) => (<><h1 style={{color:"burlywood",fontWeight:'bold'}}><FontAwesomeIcon icon={faLeaf} style={{color:'#adb792'}} ></FontAwesomeIcon> {content} </h1></>))}
        </div>
      </div>
    </div>
  )
}

export default PositivePoints