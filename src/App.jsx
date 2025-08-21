import React from "react"

export default function App() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("Definitely")
     * 2. Add a click event listener to the button
     *    that runs `handleClick` when the button is clicked.
     */
    function handleClick(){
      setIsImportant("Definitely")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button
              className="value"
              onClick={handleClick}
             
             >{isImportant}</button>
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
