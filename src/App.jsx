import { Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import PageLayout from './layout/PageLayout/PageLayout'

const App = () => {
  return (
    <>

    <PageLayout>
      <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
    </PageLayout>
    

    </>
    
   
  )
}

export default App