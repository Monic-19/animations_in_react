import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {

    const refr = useRef(null);
    const refr2 = useRef(null);

    useEffect( () => {
        const tri = refr.current;
        gsap.fromTo(tri, {opacity : 0} , {opacity : 1, scale : 10, duration : 2 , scrollTrigger : {
            trigger : ".GST",
            // markers : true,
            start : "30% 50%",
            end : "90% 50%",
            // scrub : true
        }})
        gsap.to(tri,{
            x : "100vw",
            duration : 3,
            scrollTrigger : {
                trigger : ".GST",
                // markers : true,
                start : "60% 50%",
                end : "90% 50%",
                scrub : true
            }
        })
    }, [] );

    useEffect( () => {
        const elem = refr2.current;
        
        gsap.to(elem, {
            width : "100%",
            duration : 1,
            scrollTrigger : {
                trigger : ".GST2",
                // markers : true,
                start : "20% 50%",
                end : "80% 50%",
                scrub : true
            }
        })

    }, [] )

  return (
    <>
    <div className='GST'>
        <p ref={refr}>
            GsapScrollTrigger    
        </p>
    </div>


    <div className='GST2'>
        <div className="GST2Box1"></div>
        <div className="GST2Text">This is the text..</div>
        <div className="GST2Text GST2Text2" ref={refr2}>This is the text..</div>

    </div>
    </>
  )
}

export default GsapScrollTrigger