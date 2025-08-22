import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Challenge: add another label and input for the password field
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        <label htmlFor='password'>Password:</label>
        <input  id='password' type='password' name='password' placeholder='123456789'/>
        
        
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);