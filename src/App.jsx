import React from "react"

export default function App() {
    let [num,setNum]=React.useState(0)
    function Increase(){
      setNum(num+1)
    }
    function Decrease(){
      setNum(num-1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button
                  className="minus" 
                  aria-label="Decrease count"
                  onClick={Decrease}
                >–</button>

                <h2 className="count">{num}</h2>

                <button
                  className="plus" 
                  aria-label="Increase count"
                  onClick={Increase}
                >+</button>
            </div>
        </main>
    )
}






// import Header from "./Header"
// import Main from "./Main"

// export default function App() {
//   return (
//       <>
//         <Header/>
//         <Main/>
//       </>
      
//   )
// }
