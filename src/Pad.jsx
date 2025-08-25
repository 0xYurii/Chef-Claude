
import { useState } from "react"

export default function Pad(props) {
    const [turn,setTurn]=useState(false)
    function turneOn(){
        setTurn(prev=>!prev)
        
    }
    return (
        <button 
            style={{backgroundColor: props.color}}
            onClick={turneOn}
            className={turn?"on":""}
        ></button>
    )
}