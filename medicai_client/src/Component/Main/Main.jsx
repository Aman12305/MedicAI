import React,{useEffect,useState} from 'react'
import {Box, Heading,Text} from '@chakra-ui/react'
import './Main.css'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <Box className='banner' position='relative' display='flex'>
        <Box my='auto' mx='auto' minH='150px' w='sm' p='20px' bg='blackAlpha.300' borderRadius='20px' textAlign='center' h='max-content'>
            <Heading>Welcome to Medic AI</Heading>
            <Text>
                This is platform which helps doctor to verify diseases using some  
                <strong>{" Machine learning and AI tools"}</strong>.
            </Text>
            <Text>So what are you waiting for</Text>
            <Box mt='10px'>
                <Link to='/form' className='chakra_button'>Let Get Started</Link>
            </Box>
        </Box>
    </Box>
  )
}
