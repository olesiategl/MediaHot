import React from 'react'

import './commonBookSec.css'

import { Container } from 'reactstrap'

const CommonBookSection = ({title}) => {
  return (
    <section className='common-section'>
        <Container className='text-center'><h2>{title}</h2></Container>
    </section>
  )
}

export default CommonBookSection
