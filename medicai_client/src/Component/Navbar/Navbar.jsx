import { Box,Text ,Image} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/backgroundcircle.png'

export default function Navbar() {

    const location = useLocation();

    const [show,setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setShow(true);
            } else setShow(false);
        });
    }, []);
  return (
    <Box h='60px' position='fixed' w='100%' className={`navbar ${(show || location.pathname==='/form') && "chakra_color"}`} zIndex={2} display='flex' alignItems='center'>
      <Box display='flex' alignItems='center' h='30px' w='max-content' ml='10px'>
        <Image src={logo} w='30px' h='30px' mr='10px'></Image>
        <Text  fontSize='23px' fontWeight='600' w='max-content' className='logo_text'>Medic Ai</Text>
      </Box>
       
    </Box>
  )
}
