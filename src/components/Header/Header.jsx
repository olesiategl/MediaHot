import React, {useRef, useEffect} from 'react'
import './header.css'
import { Container } from 'reactstrap'

import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'Hot',
    url: '/hot'
  },
  {
    display: 'Books',
    url: '/books'
  },
  {
    display: 'Movies',
    url: '/movies'
  },
  {
    display: 'About',
    url: '/about'
  },
  {
    display: 'Contact',
    url: '/contact'
  },


]

const Header = () => {

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header-shrink')
      }
      else{
        headerRef.current.classList.remove('header-shrink')
      }
    })

    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  const toggleMenu =()=> menuRef.current.classList.toggle('active-menu');

  return <header className='header' ref={headerRef}>
    <Container>
      <div className="navigation">
        <div className="logo">
          <h2 className=" d-flex gap-2 align-items-center ">
            <span>
              <i class = 'ri-fire-fill'></i>
            </span>
            Media-Map
            </h2>
        </div>

        <div className="nav-menu" ref={menuRef} onClick={toggleMenu}>
          <ul className="nav-list">
            {NAV_LINKS.map((item, index) => (
              <li className="nav-item" key = {index}>
                <NavLink 
                to = {item.url} 
                className = { navClass => 
                  navClass.isActive ? 'active' : ''
                }
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right d-flex align-items-center gap-5">

        <button className='btn d-flex gap-2 align-items-center'>
          <Link to = {'/signIn'}><i class="ri-heart-add-fill"></i></Link>  
        </button>

          <button className='btn d-flex gap-2 align-items-center'>
            <span>
              <i class = 'ri-login-circle-line'></i>
            </span> 
            <Link to = {'/signIn'}>Sign in</Link>  
          </button>

            <span className='mobile-menu'>
              <i class = 'ri-menu-line' onClick={toggleMenu}></i>
            </span>
        </div>
      </div>
    </Container>
  </header>
}

export default Header
