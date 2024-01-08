import React, { useRef } from 'react'
import "./style.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const PageIntro = () => {

  const ref = useRef(null);
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline()

      .from(".PS .PSBlankUp", {
        y: -100,
        duration: 2,
      }, "a")
      .from(".PS .PSBlankDown", {
        y: 100,
        duration: 2,
      }, "a")

      .from("#PSi1 , #PSi2", {
        opacity: 0,
        rotate: 0,
      })

      .from("#PSText", {
        x: "10vw",
        opacity: 0
      })


  }, { scope: ref })


  return (

    <div className="PS" ref={ref}>
      <div className="PsBlank PSBlankUp"></div>

      <div className="PsHero">

        <div className="PSimages" >
          <img id='PSi1' src="/images/model1.avif" alt="" />
          <img id='PSi2' src="/images/model2.avif" alt="" />
          <div id='PSText' className='PSBox'>New <br />Collection</div>

        </div>

      </div>

      <div className="PsBlank PSBlankDown"></div>
    </div>
  )
}

export default PageIntro