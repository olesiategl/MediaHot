import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import BookCard from '../Book-card/BookCard'
import { MOVIE__DATA } from '../../../assets/data/data.js'

import './movies-section.css'

const MoviesSection = () => {
  return <section>
      <Container>
          <Row>
              <Col lg = '12' className='mb-5'>
                <div className="books-section-top d-flex align-items-center justify-content-between">
                    <h3>Movies</h3>
                    <span><Link to='/movies'>Explore more</Link></span>
                </div>
              </Col>

                {
                    MOVIE__DATA.slice(0, 4).map((item) =>(
                        <Col lg = '3'>
                            <BookCard key = {item.id} item = {item}/>
                        </Col>
                    ))
                }
              
          </Row>
      </Container>
  </section>
}

export default MoviesSection
