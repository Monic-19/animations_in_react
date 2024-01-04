import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

const UseScrollarFramer = () => {

    const refr = useRef(null); 
    const {scrollYProgress} = useScroll({target : refr, offset : ["0 1", "0.5 1"]});

    const x2 =useTransform(scrollYProgress, [0,1], [0.8,1]);
    const x =useTransform(scrollYProgress, [0,1], [0.5,1]);

  return (
    <div className='USBox'>
      <h1>Use Scroll Hook</h1>

      <div className="USBCont">
        <motion.div className="USBB"  ref={refr} style={{scale : x2, opacity : x}}></motion.div>
        <motion.div className="USBB"  ref={refr} style={{scale : x2, opacity : x}}></motion.div>
        <motion.div className="USBB"  ref={refr} style={{scale : x2, opacity : x}}></motion.div>
      </div>
    </div>
  )
}

export default UseScrollarFramer
