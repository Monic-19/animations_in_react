import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {motion as m} from 'framer-motion';
// import {motion as m, useMotionValueEvent, useScroll} from 'framer-motion';

const Header = () => {

  // const variants = {

  //   visible : {y : 0},
  //   hidden : { y : "-100%"}
  // }

  // const duration = {duration : 0.5}

  // const [hidden, setHidden] = useState(false);

  // const {scrollY} = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const prev = scrollY.getPrevious();
  //   // console.log(latest, prev)

  //   if(latest > prev) 
  //       setHidden(true);
  //   else 
  //       setHidden(false);
  // })

  return (
    <m.div 
          className='header' >
          {/* // variants={variants} transition={duration}
          // animate = {hidden ? "hidden" : "visible"} */}

      <NavLink to= "/"> Page1</NavLink>
      <NavLink to= "/page2"> Page2</NavLink>
    </m.div>
  )
}

export default Header