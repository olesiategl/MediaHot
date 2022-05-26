import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import BookCard from '../Book-card/BookCard'
import { BOOK__DATA } from '../../../assets/data/data.js'

import './books-section.css'

const BooksSection = () => {
  return <section>
      <Container>
          <Row>
              <Col lg = '12' className='mb-5'>
                <div className="books-section-top d-flex align-items-center justify-content-between">
                    <h3>Books</h3>
                    <span><Link to='/books'>Explore more</Link></span>
                </div>
              </Col>

                {
                    BOOK__DATA.slice(0, 4).map((item) =>(
                        <Col lg = '3' md = '4' sm = '6' className='mb-4'>
                            <BookCard key = {item.id} item = {item}/>
                        </Col>
                    ))
                }
              
          </Row>
      </Container>
  </section>
}

export default BooksSection
