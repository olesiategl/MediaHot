import React, { useState } from 'react'

import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'

import BookCard from '../components/ui/Book-card/BookCard'

import { BOOK__DATA } from '../assets/data/data'

import { Container, Row, Col } from 'reactstrap'

import '../styles/books.css'


const Books = () => {
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(BOOK__DATA);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = BOOK__DATA.filter((item) => {
        return item.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(BOOK__DATA);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  
  return <>
    <CommonBookSection title = 'Books'/>

    <section>
      <Container>
        <Row>
          <Col lg = '12' className='mb-5'> 
            <div className='book-seach d-flex align-items-center'>
              <i class="ri-search-2-line"></i>
              <input className='seach' type="text" value={name} onChange={filter} placeholder="Search for titles..."/>
            </div>
          </Col>

          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((item) => (
              <Col lg = '3' mb = '4' sm = '6' className='mb-4' key={item.id}>
                <BookCard item = {item}/>
              </Col>
            ))
          ) : (
            <h1>No results found!</h1>
          )}

        </Row>
      </Container>
    </section>
  </>
}

export default Books
