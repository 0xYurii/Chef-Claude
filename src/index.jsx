import React from 'react';
import ReactDOM from 'react-dom/client';

function singup(formData){
    const email=formData.get("email")
    const pass=formData.get("password")
    console.log(email+pass)

}

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form action={singup}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);