import React from 'react'
import cn from 'classnames'

const MImage = ({url, active, rotationPosition}) => {
  return (
    <img alt='img' className={cn({active})} src={url} style={{
        transform : active ? `scale(1.1) rotate(${rotationPosition}deg)` : `rotate(${rotationPosition}deg)`
    }}>
      
    </img>
  )
}

export default MImage