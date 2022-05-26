import React from 'react'
import { Container } from 'reactstrap'
import HeroSection from '../components/ui/HeroSection'
import CheckOut from '../components/ui/CheckOut/CheckOut';
import BooksSection from '../components/ui/BooksSection/BooksSection';
import MoviesSection from '../components/ui/MoviesSection/MoviesSection';

const Home = () => {
  return (
    <>
      <HeroSection/>;
      <CheckOut/>;
      <BooksSection/>;
      <MoviesSection/>
    </>
  );
};

export default Home
