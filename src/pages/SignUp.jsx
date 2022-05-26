import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'

const SignUp = () => {
  return <>
  <CommonBookSec title='Sign Up'/>
  <section>
    <Container>
      <Row>
        <Col lg = '6' md = '6' className='m-auto text-center'>
            <div className="contact">
              <form>
                <div className="form-input mt-4">
                  <input type="name"  placeholder='Enter your name'/>
                </div>
                <div className="form-input mt-4">
                  <input type="text"  placeholder='Enter your surname'/>
                </div>
                <div className="form-input mt-4">
                  <input type="email"  placeholder='Enter your email'/>
                </div>
                <div className="form-input mt-4">
                  <input type="password"  placeholder='Enter password'/>
                </div>

                <button className='send-btn'>Sign Up</button>
                <Link className="link-register" style={{
                  padding: '30px',
                  color: '#fff',
                  textDecoration: 'none',
                }} to='/signIn'>Do you already have an account?</Link>
              </form>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default SignUp
