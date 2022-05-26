import React from 'react'

import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'

import BookCard from '../components/ui/Book-card/BookCard'

import { MOVIE__DATA } from '../assets/data/data'

import { Container, Row, Col } from 'reactstrap'

import '../styles/books.css'

const Movies = () => {

  const handleCategory = () => {

  }
  return <>
    <CommonBookSection title = 'Movies'/>

    <section>
      <Container>
        <Row>
          <Col lg = '12' className='mb-5'> 
            <div className="books-filter d-flex align-items-center">
              <div className="filter-left d-flex align-items-center gap-5">
                <div className="all-books-filter">
                  <select onChange={handleCategory}>
                    <option>All books types</option>
                    <option value="classics">Classics</option>
                    <option value="horror">Horror</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="thrillers">Thrillers</option>
                    <option value="autobiographies">Autobiographies</option>
                    <option value="history">History</option>
                    <option value="poetry">Poetry</option>
                    <option value="selfHelp">Self-Help</option>
                    <option value="essays">Essays</option>
                  </select>
                </div>

              </div>

              <div className="filter-right"></div>
            </div>
          </Col>

          {
            MOVIE__DATA.map(item =>(
              <Col lg = '3' mb = '4' sm = '6' className='mb-4' key={item}>
                <BookCard item = {item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  </>
}

export default Movies

