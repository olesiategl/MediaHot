import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './footer.css'



const MY_ACCOUNT = [
  {
    display: 'Books',
    url: '/books'
  },
  {
    display: 'Movies',
    url: '/movies'
  },
  {
    display: 'Hot',
    url: '/hot'
  },
  {
    display: 'Sign In',
    url: '/signIn'
  },
]

const RESOURCES = [
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  },
]

const COMPANY = [
  {
    display: 'About',
    url: '/about'
  },
  {
    display: 'Career',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact us',
    url: '/contact'
  },
]

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg = '3' md = '6' sm = '6' className='mb-4'>
        <div className="logo">
          <h2 className=" d-flex gap-2 align-items-conter ">
            <span>
              <i class = 'ri-fire-fill'></i>
            </span>
            Media-Map
            </h2>
            <p>
            Watch, read and enjoy more of your favorite books or movies. Join Media Map, 
            the greatest online community for people of culture like you!
            </p>
        </div>
        </Col>

        <Col lg = '2' md = '3' sm = '6' className='mb-4'>
          <h5>My Account</h5>
          <ListGroup className='list-group'>
            {
              MY_ACCOUNT.map((item, index) =>(
                <ListGroupItem key = {index} className = 'list-item'>
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>

        <Col lg = '2' md = '3' sm = '6' className='mb-4'>
          <h5>Resources</h5>
          <ListGroup className='list-group'>
            {
              RESOURCES.map((item, index) =>(
                <ListGroupItem key = {index} className = 'list-item'>
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>

        <Col lg = '2' md = '3' sm = '6' className='mb-4'>
          <h5>Company</h5>
          <ListGroup className='list-group'>
            {
              COMPANY.map((item, index) =>(
                <ListGroupItem key = {index} className = 'list-item'>
                  <Link to={item.url}> {item.display} </Link>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Col>

        <Col lg = '2' md = '3' sm = '6' className='mb-4'>
          <h5>Newsletter</h5>
          <input type="text" className='newsletter' placeholder='Email' />
          <div className="social-links d-flex gap-3 align-items-conter ">
            <span><Link to = '#'><i class = 'ri-facebook-line'></i></Link></span>
            <span><Link to = '#'><i class = 'ri-instagram-line'></i></Link></span>
            <span><Link to = '#'><i class = 'ri-twitter-line'></i></Link></span>
            <span><Link to = '#'><i class = 'ri-telegram-line'></i></Link></span>
            <span><Link to = '#'><i class = 'ri-discord-line'></i></Link></span>

          </div>
        </Col>

        <Col lg = '12' className='mt-4 text-center'>
          <p className='copyright'>
            Copyrights 2022, Developed by Olesia Tehlivets
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
