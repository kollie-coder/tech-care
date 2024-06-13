import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons'

const VitalsCard = () => {
  return (

    <Grid
    templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} // Adjust columns based on screen size
    gap={5} // Gap between boxes
    p={5} // Padding around the grid
  >
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
                 10 bpm 
                 </Text>
        </Box>

        <Text fontSize={14}>
            Normal
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
                    98.6°F 
                </Text>

            </Box>

                <Text fontSize={14}>
                Normal
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
                78 bpm 
                </Text>

            </Box>

            <Text display={'flex'} alignItems={"center"} gap={"8px"} fontSize={14}>
                <Image src={icons.ArrowDown} alt='arrow-down' w={"10px"} h={"5px"}/>
                Lower than Average
                </Text>



    </Box>
  </Grid>
  
  )
}

export default VitalsCard