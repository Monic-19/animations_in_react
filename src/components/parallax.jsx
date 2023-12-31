import React, { useEffect, useRef } from 'react'
import "./parallax.css"
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

const Parallax = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 2000]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -4000]);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            <div className='spacer'></div>

            <motion.div ref={container} className='box'>

                <motion.div className='col' style={{ y }}>
                    <img src="/images/img1.avif" alt="" />
                    <img src="/images/img2.avif" alt="" />
                    <img src="/images/img3.avif" alt="" />
                </motion.div>

                <motion.div style={{y1}} className='col'>
                    <img src="/images/img4.avif" alt="" />
                    <img src="/images/img5.avif" alt="" />
                    <img src="/images/img6.avif" alt="" />
                </motion.div>

                <motion.div style={{y2}} className='col'>
                    <img src="/images/img7.avif" alt="" />
                    <img src="/images/img8.avif" alt="" />
                    <img src="/images/img9.avif" alt="" />
                </motion.div>

                <motion.div style={{y3}} className='col'>
                    <img src="/images/img10.avif" alt="" />
                    <img src="/images/img11.avif" alt="" />
                    <img src="/images/img12.avif" alt="" />
                </motion.div>

            </motion.div>

            <div className='spacer'></div>
        </>
    )
}

export default Parallax
