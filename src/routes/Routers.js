import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import BooksDetails from '../pages/BooksDetails'
import MoviesDetails from '../pages/MoviesDetails'
import Hot from '../pages/Hot'
import Books from '../pages/Books'
import Movies from '../pages/Movies'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import About from '../pages/About'
import Cart from '../pages/Cart'




const Routers = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to = '/home'/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/hot' element = {<Hot/>}/>
        <Route path='/books' element = {<Books/>}/>
        <Route path='/movies' element = {<Movies/>}/>
        <Route path='/books/:id' element = {<BooksDetails />}/>
        <Route path='/movies/:id' element = {<MoviesDetails />}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/signIn' element = {<SignIn/>}/>
        <Route path='/signUp' element = {<SignUp/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/cart' element = {<Cart/>}/>
    </Routes>
  )
}

export default Routers
