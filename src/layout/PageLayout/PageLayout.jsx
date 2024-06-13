import { Box, Flex } from '@chakra-ui/react'
import React, { Children } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import PatientList from '../../components/PatientList/PatientList';
import HomePage from '../../pages/HomePage/HomePage';
import PatientInfo from '../../components/PatientInfo/PatientInfo';

const PageLayout = ({children}) => {
  return (
    <Flex flexDir={"column"}>

        <Navbar/>
    
        <Flex justifyContent={'space-between'}>
            
           <Box>
            <PatientList/>
           </Box>

           <Box flex={1}>
             {children}
           </Box>

           <Box>
            <PatientInfo/>
           </Box>

        </Flex>
    </Flex>
  )
}

export default PageLayout