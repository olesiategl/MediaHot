import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'

import '../styles/about.css'
import about_img1 from '../assets/images/about_img1.jpg'
import about_img2 from '../assets/images/about_img2.jpg'
import about_img3 from '../assets/images/about_img3.jpg'
import { Link } from 'react-router-dom'



const About = () => {
  return <>
    <CommonBookSec title='About Us'/>
    <section>
        <Container>
        <h2 className="text-center mb-4">Our Team</h2>
            <Row>
                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img1} alt="Jane"/>
                        <div class="about-content">
                            <h2>Olesia Tehlivets</h2>
                            <p class="title">Frontend Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>olesia@example.com</p>
                            <p><button class="button"><Link to='/contact'>Contact</Link></button></p>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img2} alt="Mike"/>
                        <div class="about-content">
                            <h2>Nestor Zasymenko</h2>
                            <p class="title">Project Manager</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>nestor@example.com</p>
                            <p><button class="button"><Link to='/contact'>Contact</Link></button></p>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img3} alt="John"/>
                        <div class="about-content">
                            <h2>Pavlo Melnyk</h2>
                            <p class="title">Backend Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>pavlo@example.com</p>
                            <p><button class="button"><Link to='/contact'>Contact</Link></button></p>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img1} alt="John"/>
                        <div class="about-content">
                            <h2>Sofia Dochylo</h2>
                            <p class="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>sofia@example.com</p>
                            <p><button class="button"><Link to='/contact'>Contact</Link></button></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    
    </section>
    </>
}

export default About
