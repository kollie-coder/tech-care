import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons';
import images from "../../constants/images";
import PatientData from './PatientData';
import useRequest from '../../lib/useRequest';
import { getPatients } from '../../lib/requests';


const PatientList = () => {

  const { data: extractedData } = useRequest(getPatients);

  const patientData = extractedData;
  
  return (
    <>
    <Box w={"367px"} h={"1058px"} backgroundColor={"#FFFFFF"} 
        mx={"18px"} px={"20px"} pb={"10px"} borderRadius={"16px"}
         overflowY={'auto'}
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
          
          
        }}
         >
      <Flex 
      alignItems={"center"}
       justifyItems={"center"}
        justifyContent={"space-between"}
        position="sticky" 
        top="0" 
        backgroundColor={"#FFFFFF"} 
        zIndex={1}
        py={"20px"}
        >
        <Text fontSize={24} fontWeight={"bold"}>Patients</Text>
        <Image src={icons.Search} alt='search' w={18} h={18} objectFit={"contain"} />
      </Flex>

    {patientData.map(item => (
      <Box mt={"40px"}>
            <PatientData
                name={item.name} 
                age={item.age}
                gender={item.gender}
                image={item.profilePic} />
          </Box>
    ))}
      
    </Box>
    </>
    
  )
}

export default PatientList