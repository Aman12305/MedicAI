import * as React from 'react'
import Layout from './Component/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import AllRoutes from './Component/AllRoutes';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <AllRoutes/>
    </ChakraProvider>
  )
}

export default App;
