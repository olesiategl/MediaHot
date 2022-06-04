import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import MovieCard from '../components/ui/Movie-card/MovieCard'
import { MOVIE__DATA } from '../assets/data/data'
import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'

import '../styles/hot.css'

import { BOOK__DATA } from '../assets/data/data'

const Hot = () => {

  return <>
  <CommonBookSection title = 'Hot'/>
    <section>
    <Container>
      <h2 className='text-center mt-4 mb-4'>Latest Trends List</h2>
      <Row>
        <h3 className='hot-header mt-4'>Books</h3>
        <div className='hot-book'>
        {
          BOOK__DATA.slice(0, 10).map((item) =>(
              <Col className='child mt-4' lg = '3'>
                  <MovieCard key = {item.id} item = {item}/>
              </Col>
          ))
        }
        </div>

        
        <h3 className='hot-header mt-4'>Movies</h3>
        <div className='hot-book'>
        {
          MOVIE__DATA.slice(0, 10).map((item) =>(
              <Col className='child mt-4' lg = '3'>
                  <MovieCard key = {item.id} item = {item}/>
              </Col>
          ))
        }
        </div>
      </Row>
    </Container>
    </section>
  </>
}

export default Hot
