import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './checkOut.css'

import home_rec from '../../../assets/images/home_rec.jpg'
import book1 from '../../../assets/images/book1.jpg'
import book2 from '../../../assets/images/book2.jpg'
import book3 from '../../../assets/images/book3.jpg'
import batman1 from '../../../assets/images/batman1.jpg'
import { Link } from 'react-router-dom'



const checkOut = () => {
  return <section className='check-section'>
  <Container>
      <Row>
          <div className='check-section-header'>
              <p className='mb-4'>Check this out!</p>
          </div>
          <Col lg = '4' md = '5' className='mt-4'>
            <div className='first-block'>
                <div className='home-rec-img'>
                    <img src={home_rec} alt="" />
                </div>
                    
                <div className='home-rec-text'>
                    <Link to='#'>The 10 Best TV Shows And Where To Watch Them</Link>
                </div>
            </div>

          </Col>

          <Col lg = '2' className='check-container mt-4'>
            <div className='books-img'>
                <img src={book1} alt="" />
                <img src={book2} alt="" />
                <img src={book3} alt="" />

            </div>
            <div className="movie-img mt-5">
                <img src={batman1} alt="" />
            </div>

          </Col>
        
          <Col className='mt-4 check-container'>
            <div className="second-block">
                <div className="books-section">
                    <div className="book-content">
                        <p>You Think That Non-Fiction Is Boring? Check Out Newest New York Times Best Sellers And Think Again</p>
                    </div>
                </div>
                <div className="movie-section mt-5">
                    <div className="movie-content">
                        <p>Latest Batman Movie Got The Whole World's Eyes On It. See Yourself What's All The Hype About</p>
                    </div>
                </div>
            </div>
          </Col>
      </Row>
    </Container>
  </section>
}

export default checkOut
