import React, { useState } from 'react'

import CommonBookSection from '../components/ui/Common-book-section/CommonBookSection'

import MovieCard from '../components/ui/Movie-card/MovieCard'

import { MOVIE__DATA } from '../assets/data/data'

import { Container, Row, Col } from 'reactstrap'

import '../styles/books.css'

const Movies = () => {

  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(MOVIE__DATA);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = MOVIE__DATA.filter((user) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(MOVIE__DATA);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return <>
    <CommonBookSection title = 'Movies'/>

    <section>
      <Container>
        <Row>
          <Col lg = '12' className='mb-5'> 
              <div className='book-seach d-flex align-items-center'>
                <i class="ri-search-2-line"></i>
                <input className='seach' type="text" value={name} onChange={filter} placeholder="Search for titles.."/>
              </div>

          </Col>

          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((item) => (
            <Col lg = '3' mb = '4' sm = '6' className='mb-4' key={item.id}>
              <MovieCard item = {item}/>
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

export default Movies

