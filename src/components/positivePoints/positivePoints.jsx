import React from 'react';
import './positivePoints.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const POSITIVEPOINTS = [
  {
    content:'חומרי גלם איכותיים'
  },
  {
    content:'מוצרים יחודיים'
  },
  {
    content:'יצירתיות ART BY NATURE'
  },
  {
    content:'ערך מוסף'
  },
  {
    content:'גימור גבוהה'
  },
  {
    content:'קוסמטי + טיפולי'
  },
]


const PositivePoints = () => {
  return (
    <div className="positive-points">
        
      <div className="positive-points-container">
        <h1>החוזקות שלנו</h1>
        <div className="positive-points-inner">
        {POSITIVEPOINTS.map(({content}) => (<><h1 style={{color:"burlywood",fontWeight:'bold'}}><FontAwesomeIcon icon={faLeaf} style={{color:'#adb792'}} ></FontAwesomeIcon> {content} </h1></>))}
        </div>
      </div>
    </div>
  )
}

export default PositivePoints