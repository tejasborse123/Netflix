import React, { useState } from 'react';
import bg from '../src/images/bg.jpg';
import './Home.css';

function App() {

    const [selectedValue, setSelectedValue] = useState('');
  
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

  return (
   <>
  <div className='bgimg'> 
    <div className="Navbar">
      <p className='heading'>NETFLIX</p>
      <div className='right'>
          <select value={selectedValue} onChange={handleChange}>
            <option value="English"><i className='fa-solid fa-globe'></i>English</option>
            <option value="Hindi"><i className='fa-solid fa-globe'></i>Hindi</option>
          </select>
          <button> Sign In </button>
      </div>
    </div>

    <div className='Content'>
      <p>Unlimited movies, TV shows and more.</p>
      <h2 className='h2'>Watch anywhere. Cancel anytime.</h2>

      <div className='Main'>
        <form>
          <label><h2>Ready to watch? Enter your email to create or restart your membership.</h2></label>
          <div className='inputs'>
            <input type='text' placeholder='Email Address'></input>
            <button>Get Started</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   </>
  );
}

export default App;
