import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonBookSec from '../components/ui/Common-book-section/CommonBookSection'

import '../styles/about.css'
import about_img1 from '../assets/images/photo_sofia.jpeg'
import about_img2 from '../assets/images/photo_nestor.jpeg'
import about_img3 from '../assets/images/photo_pasha.jpg'
import about_img4 from '../assets/images/photo_olesia.jpeg'




const About = () => {
  return <>
    <CommonBookSec title='About Us'/>
    <section>
        <Container>
        <h2 className="text-center mb-4">Our Team</h2>
            <Row>
                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img4} alt="Jane"/>
                        <div class="about-content mt-4">
                            <h4>Olesia Tehlivets</h4>
                            <p class="title">Frontend Developer</p>
                        </div>
                        <div class='about-memder-social text-center'>
                            <a href='#' target='_blank'><i class = 'ri-instagram-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-twitter-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-telegram-line'></i></a>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img2} alt="Mike"/>
                        <div class="about-content mt-4">
                            <h4>Nestor Zasymenko</h4>
                            <p class="title">Project Manager</p>
                        </div>
                        <div class='about-memder-social text-center'>
                            <a href='#' target='_blank'><i class = 'ri-instagram-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-twitter-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-telegram-line'></i></a>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img3} alt="John"/>
                        <div class="about-content mt-4">
                            <h4>Pavlo Melnyk</h4>
                            <p class="title">Backend Developer</p>
                        </div>
                        <div class='about-memder-social text-center'>
                            <a href='#' target='_blank'><i class = 'ri-instagram-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-twitter-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-telegram-line'></i></a>
                        </div>
                    </div>
                </Col>

                <Col lg='3' className='column'>
                    <div class="card">
                        <img src={about_img1} alt="John"/>
                        <div class="about-content mt-4">
                            <h4>Sofia Dochylo</h4>
                            <p class="title">Designer</p>
                        </div>
                        <div class='about-memder-social text-center'>
                            <a href='#' target='_blank'><i class = 'ri-instagram-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-twitter-line'></i></a>
                            <a href='#' target='_blank'><i class = 'ri-telegram-line'></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    
    </section>
    </>
}

export default About
