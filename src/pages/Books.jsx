import React, { useState } from 'react'

import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'

import BookCard from '../components/ui/Book-card/BookCard'

import { BOOK__DATA } from '../assets/data/data'

import { Container, Row, Col } from 'reactstrap'

import '../styles/books.css'

const Books = () => {

  const {data, setData} = useState(BOOK__DATA)

  const handleCategory = (e) => {
    const filterValue = e.target.value;

    if(filterValue === 'all-books') {
      const filterData = BOOK__DATA

      setData(filterData)
    }

    if(filterValue === 'classics') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }

    if(filterValue === 'fantasy') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }

    if(filterValue === 'essays') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }

    if(filterValue === 'poetry') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }

    if(filterValue === 'thrillers') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }

    if(filterValue === 'autobiographies') {
      const filterData = BOOK__DATA.filter(item => item.genre === filterValue)

      setData(filterData)
    }
  }
  return <>
    <CommonBookSection title = 'Books'/>

    <section>
      <Container>
        <Row>
          <Col lg = '12' className='mb-5'> 
            <div className="books-filter d-flex align-items-center">
              <div className="filter-left d-flex align-items-center gap-5">
                <div className="all-books-filter">
                  <select onChange={handleCategory}>
                    <option value='all-books'>All books types</option>
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
            BOOK__DATA.map((item) =>(
              <Col lg = '3' mb = '4' sm = '6' className='mb-4' key={item.id}>
                <BookCard item = {item}/>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  </>
}

export default Books
