import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/icon/banner.png'



const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }}
      position={'relative'} p='20px'>
      <Typography color='#FF2625' fontWeight={600} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', sm: '40px' }}} mb={'20px'} mt={'30px'}>
        Sweat,Smile <br />And Repeat
      </Typography>
      <Typography fontSize={'22px'} lineHeight={'35px'} mb={'10px'}>
        Click out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#ff2625',padding:'10px'}}>Explore Exercises</Button>
      <Typography
        fontWeight={'700px'}
        fontSize={'200px'}
        color='#ff2625'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}

      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner