import React,{useState} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
// import logo from '../../assets/white-textlogo.png'
import {FaTwitter,FaInstagram,FaLinkedinIn,FaFacebook} from 'react-icons/fa'
import { Text,Box, Heading ,Image} from '@chakra-ui/react'

export default function Footer() {
  const [isModalOpen,setModalOpen] = useState(false);
    const [mode,setMode] = useState('');

    const handleInfoClick = (mode) =>{
        setMode(mode);
        setModalOpen(true);
    }

    const onClose = () =>{
        setMode('');
        setModalOpen(false);
    }

  return (
    <Box className='chakra_color' px='10px' py='20px'>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' className="" float='right' w='100px' h='25px'/>
      <Box maxW='50%' >Copyright © 2023 MedicAi Pvt Ltd.</Box>
    </Box>
  )
}
