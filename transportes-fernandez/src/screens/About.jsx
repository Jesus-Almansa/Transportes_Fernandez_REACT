import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Carousel from '../components/features/Carousel/Carousel'

function About() {
  return (
    <div id='About'>
      <h1>About Us</h1>
      <Carousel />
      <p>Learn more about our company and services.
        TONTO EL QUE LO LEA
      </p>
    </div>
  )
}

export default About

