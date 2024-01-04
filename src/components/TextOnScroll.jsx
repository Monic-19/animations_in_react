import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from "framer-motion"

const TextOnScroll = () => {

    const variants = {
        hidden: {opacity : 0, y : 75},
        visible: {opacity : 1, y : 0},
    }

    const transition = {
        delay : 0.25,
        duration : 0.5
    }

    const mainControls = useAnimation();

    const refr = useRef(null);
    const isInView = useInView(refr, {once : true})

    useEffect( ()=>{
       if(isInView){
        mainControls.start("visible");
       }
    },[isInView])

  return (
    <motion.div ref={refr} className='TOS' >
      <motion.h1 variants={variants} initial = "hidden" animate={mainControls} transition={transition}>Hey , I'm Monic</motion.h1>
      <motion.h3 variants={variants} initial = "hidden" animate={mainControls} transition={transition}>I'm a <span>Full stack developer</span></motion.h3>
      <motion.p variants={variants} initial = "hidden" animate={mainControls} transition={transition}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laborum dignissimos hic saepe eum. Ratione velit placeat dolores non maiores.</motion.p>
      <motion.button variants={variants} initial = "hidden" animate={mainControls} transition={transition}>Contact Me</motion.button>
    </motion.div>
  )
}

export default TextOnScroll
