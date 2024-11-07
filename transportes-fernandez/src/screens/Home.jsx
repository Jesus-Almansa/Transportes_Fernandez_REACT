import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';


function Home() {
  return (
    <div id=''>
      <Carousel />
      <h1>Welcome to Transportes Fernandez</h1>
      <p>This is the Home page where you can find general information.</p>
      
    </div>
  );
}

export default Home;
