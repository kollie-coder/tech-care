import React from 'react'
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import VitalsCard from '../../components/VitalsCard/VitalsCard'
import DiagonosticList from '../../components/DiagosticList/DiagonosticList'
import Graph from '../../components/Graph/Graph'

const HomePage = () => {
  return (
   <>
   <Box 
      w={"766px"}
      h={"673px"}
      bgColor={"#FFFFFF"}
      borderRadius={"16px"}
      mx={"16px"}
    >
    <Text px={"20px"} py={"20px"} fontSize={24} fontWeight={"bold"}>
      Diagonis History
      </Text>
    
    <Box 
        w={"726px"}
        h={"298px"}
        bgColor={"#F4F0FE"}
        borderRadius={"12px"}
        mt={"20px"}
        mx={"20px"}
        px={"16px"}
        py={"16px"}
        >
      <Graph/>
    </Box>

       <VitalsCard/>

   </Box>

   <Box w={"766px"} h={"349px"} bgColor={"#FFFFFF"} 
   borderRadius={"16px"} mx={"16px"} mt={"32px"}  
   overflowY={'auto'} px={"20px"} py={"20px"}
    sx={{
      '::-webkit-scrollbar': {
        width: '5px',
        
        
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px',
      
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
      
      
    }}>
    <Text fontSize={"24px"} fontWeight={"Bold"} position="sticky" top="0" 
         backgroundColor={"#FFFFFF"} zIndex={1}>
      Diagnostic List 
      </Text>

      <Box mt={"40px"} >
        <DiagonosticList/>
      </Box>
   </Box>

   </>
  )
}

export default HomePage