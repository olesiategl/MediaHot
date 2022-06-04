import React, {useRef} from 'react'

import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'
import { Container,Row, Col } from 'reactstrap'
import { useForm, ValidationError } from '@formspree/react';

import '../styles/contact.css'

const Contact = () => {


    const [state, handleSubmit] = useForm("xrgjjowy");
    if (state.succeeded) {
        return <section>
          <div className='success'>
            <h2 className='text-center mt-5'>Message was sending! Thanks for feedback!</h2>
          </div>
        </section>;
    }

  return <>
    <CommonBookSec title='Contact'/>
    <section>
      <Container>
        <Row>
          <Col lg = '6' md = '6' className='m-auto text-center'>
            <h2>Drop a Message</h2>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-input">
                    <input type="text"  placeholder='Enter your name'/>
                  </div>
                  <div className="form-input">
                    <input type="email"  placeholder='Enter your email'/>
                  </div>

                  <ValidationError prefix="Email" field="email" errors={state.errors}/>

                  <div className="form-input">
                    <textarea name='message' rows="7" placeholder='Write message'></textarea>
                  </div>

                  <ValidationError prefix="Message" field="message" errors={state.errors}/>

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
