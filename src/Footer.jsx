import React, { useState } from 'react';
import './Footer.css';

function App(props) {

  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
      setSelectedValue(event.target.value);
  }

  return (
   <>
     <div className='Footer'>
        <footer>
          <p>Questions? Call &nbsp;<a href=''>000-800-919-1694</a></p>
          <div className='Fa'>

            <div className='common'>
              <a href=''>FAQ</a>
              <a href=''>Investor Relations</a>
              <a href=''>Privacy</a>
              <a href=''>Speed Test</a>
            </div>

            <div className='common'>
              <a href=''>Help Centre</a>
              <a href=''>Jobs</a>
              <a href=''>Cookie Prefrences</a>
              <a href=''>Legal Notices</a>
            </div>

            <div className='common'>
              <a href=''>Account</a>
              <a href=''>Way to Watch</a>
              <a href=''>Corporate Information</a>
              <a href=''>Only on Netflix</a>
            </div>

            <div className='common'>
              <a href=''>Media Centre</a>
              <a href=''>Terms of Use</a>
              <a href=''>Contact Us</a>
            </div>

          </div>

          <select value={selectedValue} onChange={handleChange}>
            <option value="English"><i className='fa-solid fa-globe'></i>English</option>
            <option value="Hindi"><i className='fa-solid fa-globe'></i>Hindi</option>
          </select>

          <p className='Ind'>Netflix India</p>

        </footer>
      </div>
   </>
  );
}

export default App;
