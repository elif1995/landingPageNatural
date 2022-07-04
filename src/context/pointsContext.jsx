import {createContext, useState} from 'react';

const PointsContext = createContext()

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


export function PointsProvider({children}){

  const [points, setPoints] = useState(POSITIVEPOINTS)

  return (<PointsContext.Provider value={{points}}>
            {children}
          </PointsContext.Provider>)
}


export default PointsContext