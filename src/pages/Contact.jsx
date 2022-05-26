import React, {useRef} from 'react'

import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'
import { Container,Row, Col } from 'reactstrap'

import '../styles/contact.css'

const Contact = () => {

  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return <>
    <CommonBookSec title='Contact'/>
    <section>
      <Container>
        <Row>
          <Col lg = '6' md = '6' className='m-auto text-center'>
            <h2>Drop a Message</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis suscipit, 
              ipsam tempora sit, commodi obcaecati optio enim libero sunt nemo, aliquid adipisci 
              quaerat ducimus fuga molestias quo repellendus quidem.</p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-input">
                    <input type="text"  placeholder='Enter your name' ref={nameRef}/>
                  </div>
                  <div className="form-input">
                    <input type="email"  placeholder='Enter your email' ref={emailRef}/>
                  </div>
                  <div className="form-input">
                    <textarea rows="7" placeholder='Write message' ref={messageRef}></textarea>
                  </div>

                  <button className='send-btn'>Send a Message</button>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
}

export default Contact
