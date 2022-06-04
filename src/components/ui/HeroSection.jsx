import React from 'react'
import './heroSection.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import pic_home from '../../assets/images/pic_home.jpeg'

const HeroSection = () => {
  return <section className="hero-section">
      <Container className='hero-container'>
          <Row>
              <Col lg = '6' md = '6'>
                <div className="hero-content">
                    <h2>Save your time - Seach here online</h2>
                    <p>
                        Watch, read and enjoy more of your favorite books or movies. 
                        Join Media Map, the greatest online community for people of 
                        culture like you!
                    </p>

                    <div className="hero-btns d-flex align-items-center gap-4">
                        <p className='btn-text'>Jump right in to get recommendations</p>
                        <button id='' className='login-btn d-flex align-items-center gap-2'>
                            <Link to = '/signIn'>Sign in</Link>
                        </button>
                    </div>
                </div>
              </Col>

            <Col>
                <div className="pic_home">
                    <img src={pic_home} className = 'w-100' />
                </div>
            </Col>
          </Row>
      </Container>
  </section>
}

export default HeroSection
