import React, { useState } from 'react';
import './Card.css';
import trend from '../src/images/trending.png';
import netflix from '../src/images/netflix.png';
import child from '../src/images/child.png';
import download from '../src/images/download.png';
import CardData from "./CardData";

function Card() {

  return (
   <>

      <div className='Second'>
              {/* 
                {
                CardData.map((item,index) =>{
                    return(
                            <>
                            <div className='Card' key={index}> 
                            
                                  <div>
                                      <span>
                                          <p>{item.head}</p>
                                          <h2>{item.text}</h2>
                                      </span>
                                  </div>

                                  <div className='imgcon'>
                                    <img src={item.img}></img>
                                  </div>

                            </div><hr/>
                            </>  );
                                      
                          })
                }
                 */}

<div className='Card'> 
              <div>
                <span>
                  <p>Enjoy on your TV.</p>
                  <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                </span>
                </div>
              <div className='imgcon'>
                <img src={trend}></img>
              </div>
        </div><hr/>

        <div className='Card two'> 
              <div>
                <span>
                  <p>Watch everywhere.</p>
                  <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </span>
                </div>
              <div className='imgcon'>
                <img src={netflix}></img>
              </div>
        </div><hr/>

        <div className='Card'> 
              <div>
                <span>
                  <p>Create profiles for children.</p>
                  <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                </span>
                </div>
              <div className='imgcon'>
                <img src={child}></img>
              </div>
        </div><hr/>

        <div className='Card two'> 
              <div>
                <span>
                  <p>Download your shows to watch offline.</p>
                  <h2>Save your favourites easily and always have something to watch.</h2>
                </span>
                </div>
              <div className='imgcon'>
                <img src={download}></img>
              </div>
        </div><hr/>

        
      </div>
   </>
  );
}

export default Card;
