import React, { useState } from 'react'
import { motion } from "framer-motion"

const ChangeButton = () => {
    const [animate, setAnimate] = useState(false);
    return (
        <div className='CB'>
            <motion.div initial={false} className='circ'
                animate={animate ? "open" : "closed"}
                onClick={() => setAnimate(prevAnimate => !prevAnimate)}>

                <motion.span
                initial={false}
               
                    variants={{
                        open: {
                            rotate : 0,
                            top : "25%",

                        },
                        closed: {
                          rotate : "45deg",
                        }
                    }}
                    className="line l1">

                </motion.span>

                <motion.span
                    variants={{
                        open: {
                            rotate : 0,
                            top : "45%",
                      
                        },
                        closed: {
                            rotate : "-45deg",
                     
                        }
                    }}
                    className="line l2">

                </motion.span>

                <motion.span
            
                    variants={{
                        open: {
                            rotate : 0,
                            top : "65%",
                            opacity: 1,
                        },
                        closed: {
                            opacity: 0,
                        }
                    }}
                    className="line l3">

                </motion.span>


            </motion.div>
        </div>
    )
}

export default ChangeButton