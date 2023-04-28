import React, { useState } from 'react';
import './FAQ.css';
import FAQData from './FAQData';

function FAQ() {

  const [isVisible, setIsVisible] = useState(false);

  const handleDivClick = () => {
    setIsVisible(!isVisible);
  };

  return (
   <>

      <div className='third'>
        <h1>Frequently Asked Questions</h1>

        {/* <div className='None Active'>
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
          </p>
        </div> */}

          {FAQData.map((item,index) =>{
                            return(
                              <>
                                    <a onClick={handleDivClick}>
                                      <div className='cheat' key={index}>
                                        <p>{item.question}</p>
                                        <p><i class="fa-sharp fa-solid fa-plus"></i></p>
                                      </div>
                                    </a>

                                    {isVisible && 
                                      <div className='Active None'>
                                        <p>
                                          {item.p1}
                                        </p>
                                        <p>
                                          {item.p2}  
                                        </p>
                                      </div> 
                                    } 
                              </> );
                             })}

        
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
