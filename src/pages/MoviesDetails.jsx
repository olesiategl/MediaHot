import React from 'react'

import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { MOVIE__DATA } from '../assets/data/data'

import '../styles/book-details.css'

import MoviesSection from '../components/ui/MoviesSection/MoviesSection'

import { Link } from 'react-router-dom'

const MoviesDetails = () => {

  const {id} = useParams();

  const singleItem = MOVIE__DATA.find(item => item.id === id);


  return <>
  <CommonBookSection title={singleItem.title}/>

  <section>
    <Container>
      <Row>
        <Col lg = '5' md = '6' sm = '6'>
          <img src = {singleItem.imgUrl} className = 'w-100 single-book-card'/>
        </Col>

        <Col lg = '7' md = '6' sm = '6'>
          <div className='single-item-content'>
            <h2>{singleItem.title}</h2>

            <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
              <div className='d-flex align-items-center gap-4 single-book-seen'>
                <span>
                  <i class = 'ri-eye-line'></i> 234
                </span>
                <span>
                  <i class = 'ri-heart-line'></i> 123
                </span>
              </div>

              <div className='d-flex align-items-center gap-2 single-book-more'>
                <span>
                  <i class = 'ri-send-plane-line'></i>
                </span>
                <span>
                  <i class = 'ri-more-2-line'></i>
                </span>
              </div>
            </div>

            <div className="book-author d-flex align-items-center gap-3">
              <div className='author-detail'>
                <p>Director: </p>
                <h6>{singleItem.author}</h6>
              </div>
            </div>

            <div className="book-genre d-flex align-items-center gap-3 mt-4">
              <div className='genre-detail'>
                <p>Genre: </p>
                <h6>{singleItem.genre}</h6>
              </div>
            </div>

            <div className="book-price d-flex align-items-center gap-3 mt-4">
              <div className='price-detail'>
                <p>Main actors: </p>
                <h6>{singleItem.actors}</h6>
              </div>
            </div>

            <p className='my-4'>{singleItem.desc}</p>
            <button className='add-cart-btn d-flex align-items-center gap-2 w-100'>
              <i class="ri-add-fill"></i>
              <Link to='/signIn'>Watchlist</Link>
            </button>

          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <MoviesSection/>
  </>
}

export default MoviesDetails