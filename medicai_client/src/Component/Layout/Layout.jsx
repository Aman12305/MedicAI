import React from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Box } from '@chakra-ui/react'
import Form from '../Form/Form'

export default function Layout() {
  const location = useLocation();
  return (
    <Box position='relative'>
        <Navbar/>
        <Box minH='80vh' position='relative'>
          {
            location.pathname!=='/' && 
            <Box h='65px'></Box>
          }
            <Outlet/>
        </Box>
        <Footer/>
    </Box>
  )
}
