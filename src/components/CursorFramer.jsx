import React, { useEffect, useState } from 'react'
import './main.css'
import {motion} from "framer-motion"

const CursorFramer = () => {
    

    const [mousePosition, setMousePosition] = useState({
        x :0,
        y :0,
    });

    const [cursorVariant ,  setCursorVariant] = useState("default")

    // console.log(mousePosition)

    useEffect( () => {

        const mouseMove = e => {
            setMousePosition({
                x : e.clientX,
                y : e.clientY,
            })
        }

        document.getElementById("div").addEventListener('mousemove', mouseMove)

        return () => {
            document.getElementById("div").removeEventListener("mousemove", mouseMove)
        }

    }, [] )

    const variants = {
        default :{
            x : mousePosition.x - 16,
            y : mousePosition.y - 16,
        },

        text : {
            height : 150,
            width : 150,
            x : mousePosition.x - 75,
            y : mousePosition.y - 75,
            backgroundColor : "yellow",
            mixBlendMode : "difference"
        }
    }

    const textEnter = () => {
        setCursorVariant("text");
    }

    const textLeave = () => {
        setCursorVariant("default");
    }

  return (
    <div className='Cursorbox' id='div'>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Custom Cursor</h1>
      <motion.div variants={variants}  animate = {cursorVariant}className='cursor'></motion.div>
    </div>
  )
}

export default CursorFramer
