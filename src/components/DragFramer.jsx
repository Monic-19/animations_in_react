import React, { useRef } from 'react';
import { motion } from "framer-motion";
import './main.css';

const DragFramer = () => {

    const boxRef = useRef(null);

    return (
        <>
            <motion.div className='dragBox' ref={boxRef}>

                <h1>Move The Boxes</h1>

                    <motion.div  whileTap={{scale : 1.2}} drag dragConstraints={boxRef} className="box b1">Box 1</motion.div>
                    <motion.div  whileTap={{scale : 1.2}} drag dragConstraints={boxRef} className="box b2">Box 2</motion.div>
                    <motion.div  whileTap={{scale : 1.2}} drag dragConstraints={boxRef} className="box b3">Box 3</motion.div>
                    <motion.div  whileTap={{scale : 1.2}} drag dragConstraints={boxRef} className="box b4">Box 4</motion.div>

            </motion.div>
        </>
    )
}

export default DragFramer
