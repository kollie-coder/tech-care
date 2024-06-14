import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons'

const VitalsCard = ({ respiratoryRate, heartRate, temperature }) => {
  
  const heartValue = heartRate.value;
  const heartLevels = heartRate.levels

  const respiratoryValue = respiratoryRate.value;
  const respiratoryLevels = respiratoryRate.levels

  const temperatureValue = temperature.value;
  const temperatureLevels = temperature.levels

  return (
    <>

  <Flex gap={5} p={5} overflowX="auto" sx={{ '&::-webkit-scrollbar': { display: 'none'} }}>

    <Box bg="#E0F3FA"
     height="242px"
      width="228px"
      borderRadius="12px" 
      p="16px"
      >

        <Image 
        src={icons.RespiratoryRate} 
        alt='respiratory icon'
        width={"96px"}
        height={"96px"}
        />

        <Box py={"16px"}>

            <Text
             fontSize={16}> 
            Respiratory Rate
             </Text>

            <Text 
            fontSize={30} 
            fontWeight={"Bold"}
            >
                 {respiratoryValue} bpm 
                 </Text>
        </Box>

        <Text fontSize={14}>
            {respiratoryLevels}
            </Text>
        
    </Box>

        <Box bg="#FFE6E9"
        height="242px" 
        width="228px" 
        borderRadius="12px"
        p="16px"
        >
            <Image 
            src={icons.Temperature} 
            alt='respiratory icon'
            width={"96px"}
            height={"96px"}
            />

            <Box py={"16px"}>

                <Text fontSize={16}> 
                Temperature 
                </Text>

                <Text fontSize={30} 
                fontWeight={"Bold"}>
                    {temperatureValue} °F 
                </Text>

            </Box>

                <Text fontSize={14}>
                   {temperatureLevels}
                </Text>
        
    
    </Box>


    <Box bg="#FFE6F1"
     height="242px"
     width="228px"
      borderRadius="12px" 
      p="16px"
      >
        <Image 
        src={icons.HeartBPM} 
        alt='respiratory icon'
        width={"96px"}
        height={"96px"}
        />

            <Box py={"16px"}>

                <Text fontSize={16}> 
                    Heart Rate 
                    </Text>

                <Text fontSize={30} 
                fontWeight={"Bold"}> 
                {heartValue} bpm 
                </Text>

            </Box>

            <Text display={'flex'} alignItems={"center"} gap={"8px"} fontSize={14}>
                <Image src={icons.ArrowDown} alt='arrow-down' w={"10px"} h={"5px"}/>
                {heartLevels}
                </Text>



    </Box>

    </Flex>
    </>

  
  
  )
}

export default VitalsCard