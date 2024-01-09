import React, { useState } from 'react'
import { pagedata } from './data'
import Title from './Title'
import MImage from './MImage'

const Menu3d = () => {

  const [rotationPosition , setRotation] = useState(new Array(pagedata.length).fill(0));

  const[activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    const nr = Math.random()* 14-7
    // console.log(nr)
    const tempState = [...rotationPosition]
    tempState[itemIndex] = nr;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  }

  return (
    <div className='M3d'>

      <div className="M3title">
        {
          pagedata.map( ({title}, index) => {
            // {console.log({title})}
            return(
            <Title key={index} title={title} index={index} setRotation={handleSetRotation} setIndex={setActiveIndex}></Title>)
          } )
        }
      </div>

      <div className="M3img">
      {
          pagedata.map( ({url}, index) => {
            // {console.log({url})}
            return(
            <MImage key={index} url={url} active={activeIndex===index} rotationPosition={rotationPosition[index]} ></MImage>)
          } )
        }
      </div>
    </div>
  )
}

export default Menu3d