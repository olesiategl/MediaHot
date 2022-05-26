import React from 'react'

import { Row } from 'reactstrap'

import './modal-login.css'

const ModalLogin = ({setShowModal}) => {
  return (
    <div className='modal-wrapper' onClick={() => setShowModal(false)}>
      <div className='modal'>
        <h6>Sign In</h6>

        <div className='input-item'>
            <input type="email" placeholder='Email'/>
        </div>

        <div className='input-item'>
            <input type="password" placeholder='Password'/>
        </div>
        
        <Row>
        <button className='wawes-effect wawes-light btn btn blue'>  
            Log In
        </button>
        <a href="/" className="btn-outline btn-reg">
            No account?
        </a>
        </Row>

      </div>
    </div>
  )
}

export default ModalLogin
