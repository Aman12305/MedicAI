import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Form from './Form/Form'
import Layout from './Layout/Layout'

export default function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='form' element={<Form/>}/>

            </Route>
        </Routes>
    </BrowserRouter> 
  )
}
