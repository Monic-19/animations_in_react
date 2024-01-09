import React from 'react'

const Title = ({title, index, setRotation, setIndex}) => {
  return (
    <div className='Mti'
        onMouseEnter={() => setRotation(index)}
        onMouseLeave={() => setIndex(-1)}
    >
        <h1>{title}</h1>
        
    </div>
  )
}

export default Title