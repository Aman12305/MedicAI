import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Form from './Form/Form'
import Layout from './Layout/Layout'
import Main from './Main/Main'

export default function AllRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index path='' element={<Main/>}/>
              <Route path='form' element={<Form/>}/>
            </Route>
        </Routes>
    </BrowserRouter> 
  )
}
