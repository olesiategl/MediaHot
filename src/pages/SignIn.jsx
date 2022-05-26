import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'


const SignIn = () => {
  return <>
  <CommonBookSec title='Sign In'/>
  <section>
    <Container>
      <Row>
        <Col lg = '6' md = '6' className='m-auto text-center'>
            <div className="contact">
              <form>
                <div className="form-input mt-4">
                  <input type="password"  placeholder='Enter your password'/>
                </div>
                <div className="form-input mt-4">
                  <input type="email"  placeholder='Enter your email'/>
                </div>

                <button className='send-btn'>Sign In</button>
                <Link className="link-register" style={{
                  padding: '30px',
                  color: '#fff',
                  textDecoration: 'none',
                }} to='/signUp'>No account?</Link>
              </form>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default SignIn
