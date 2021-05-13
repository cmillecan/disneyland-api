import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className='footer-container'>
      <div className='about'>
        <h3>About this project</h3>
        <div className='about-text'>
          <p>A back-end which stores information about the history and details of a variety of Disney resources such as attractions and park information. This API follows RESTful principles to expose end-points of each resource. The API has an accompanying front-end built with React to act as a client to the back-end.
            Technologies include MongoDB, Express.js, React.
          </p>
          <p>
            <a href='https://github.com/cmillecan/disneyland-app'>Github</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
