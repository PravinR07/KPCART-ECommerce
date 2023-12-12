import React from 'react'
import './NewsLatter.css'

const NewsLetter = () => {
  return (
    <>
      <div className='newslatter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newlatter and stay updated</p>
        <div>
          <input type='email' placeholder='Your Email Id'/>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default NewsLetter