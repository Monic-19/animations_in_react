import "./basicGsap.css"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const BasicGSAP = () => {

    const container = useRef();
    const tl = useRef();
    const container2 = useRef();
    const [xdist, setxdist] = useState(0);
    const [ydist, setydist] = useState(0);
    const [col, setCol] = useState("");
    const [rad, setrad] = useState(0);

    const colors = ["red", "blue", "green", "orange", "cornflowerblue", "yellow", "purple", "pink", "cornsilk", "crimson", "darkblue"];


    function changeBox(){
        const distx = gsap.utils.random(-40, 40 ,1);
        const disty = gsap.utils.random(-20, 20 ,1);
        const val = gsap.utils.random(-1, 1,1);
        const num = gsap.utils.random(0, 10,1);
        const curve = gsap.utils.random(0, 500,1);
        setxdist(distx * val);
        setydist(disty * val);
        setCol(colors[num]);
        setrad(curve);
        console.log(col)
    }

    useGSAP(() => {
        tl.current = gsap.timeline()

            .from(".rectangle", {
                rotate: "+=360",
                duration: 2,
                scale: 0.2,
                opacity: 0,
                x: "40vw",
            }, "a")

            .from(".circle", {
                scale: 0.4,
                duration: 1,
                opacity: 0,
                x: "-60vw",
            }, "a")

    }, { scope: container })

    //part2

    useGSAP( () => {

        gsap.to(".part2 .rectangle", {
            x : `${xdist}vw`,
            y : `${ydist}vh`,
            backgroundColor : col,
            duration : 0.5,
            borderRadius : rad,
            revertOnUpdate : true,
        })

    } ,[xdist, ydist])

    return (
        <>
            <div className="part1" ref={container}>

                <div className='circle'></div>
                <div className='rectangle'></div>

            </div>

            <div className="part2" ref={container2} >
                <button onClick={changeBox}>Click Me</button>
                <div className="rectangle">{setxdist}</div>
            </div>

        </>

    )
}

export default BasicGSAP
