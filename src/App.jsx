
import {useState } from "react"

export default function App() {
    const [status, setStatus]=useState(false);


    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button
              className="value" 
              onClick={()=>{setStatus(!status)}}
            
            > {status ? "yes":"no"} </button>
        </main>
    )
}
