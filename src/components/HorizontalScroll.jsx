import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const HorizontalScroll = () => {

    const images = [
        {number : 1, il : "/images/img1.avif"},
        {number : 2, il : "/images/img2.avif"},
        {number : 3, il : "/images/img3.avif"},
        {number : 4, il : "/images/img6.avif"},
        {number : 5, il : "/images/img7.avif"},
        {number : 6, il : "/images/img8.avif"},
    ]

    const refer = useRef(null);
    const { scrollYProgress } = useScroll({target : refer});
    const x = useTransform(scrollYProgress, [0,1], ["0%","-60%"]);

    // console.log(scrollYProgress)

  return (
    <div className='hscroll' ref={refer} >
      <div className="blank">HORIZONTAL SCROLL</div>

      <motion.div transistion = {{duration : "10s"}} style={{x}} className="hero">
        {
            images.map( i => (
                <div className='imgBox' key={i.number}>
                    <motion.img whileHover={{scale : 1.2}} src={i.il} alt="" />
                </div>
            ))
        }
      </motion.div>


      <div className="blank"></div>

    </div>
  )
}

export default HorizontalScroll
