import React, { useState } from 'react';
import './FAQ.css';

function FAQ(props) {

  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
      setSelectedValue(event.target.value);
  }

  return (
   <>

      <div className='third'>
        <h1>Frequently Asked Questions</h1>

        <div className='cheat'>
          <p>What is Netflix?</p>
          <p>+</p>
        </div>

        <div className='cheat'>
          <p>How Much does Netflix Cost?</p>
          <p>+</p>
        </div>

        <div className='cheat'>
          <p>Where can I Watch?</p>
          <p>+</p>
        </div>

        <div className='cheat'>
          <p>How do I cancel?</p>
          <p>+</p>
        </div>

        <div className='cheat'>
          <p>What can I watch on Netflix?</p>
          <p>+</p>
        </div>

        <div className='cheat'>
          <p>Is Netflix Good For Kids?</p>
          <p>+</p>
        </div>    


        <form>
          <label><h2>Ready to watch? Enter your email to create or restart your membership.</h2></label>
          <div className='inputs'>
            <input type='text' placeholder='Email Address'></input>
            <button>Get Started</button>
          </div>
        </form>    

      </div>
   </>
  );
}

export default FAQ;
