import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons'
import GraphItem from './GraphItem'

const Graph = () => {
  return (
    <>
     <Flex justifyContent={"space-between"}>
    <Box flex={1} mr={"36px"}>

        <Flex justifyContent={"space-between"} >
            <Text fontSize={18} fontWeight={"Bold"}>
                 Blood Pressure 
                 </Text>
            <Flex alignItems={"center"} gap={"16px"}>
                <Text fontSize={14}>
                    Last 6 months
                    </Text>
                <Image src={icons.ArrowDown} alt='arrow-down' w={"11px"} h={"6px"} />
            </Flex>
        </Flex>

        <Box pt={"20px"}>
           <GraphItem/> 
        </Box>
    </Box>

    <Box w={"208px"} h={"201px"}>

        <Box>
          
        <Flex alignItems="center">
            <Box
            width="14px"
            height="14px"
            borderRadius="50%"
            backgroundColor="#E66FD2" 
            mr={"4px"} 
            />          
                <Text fontSize={14} fontWeight={"Bold"}>
                Systolic
                </Text>
        </Flex>

                <Text fontSize={22} fontWeight={"Bold"}>
                    160
                    </Text>

      <Flex alignItems={"center"} gap={"8px"}>
            <Image 
            src={icons.ArrowUp} 
            alt='arrow-up' 
            w={"10px"}
            h={"5px"}
            />
                <Text fontSize={14}>
                    Higher than Average
                    </Text> 
                  </Flex>

        </Box>
       
           
        <Divider w={"208px"} h={"1px"} bgColor={"#CBC8D4"} my={"16px"}/>

        <Box>
          
        <Flex alignItems="center">
            <Box
            width="14px"
            height="14px"
            borderRadius="50%"
            backgroundColor="#8C6FE6" // Change this to any color you prefer
            mr={"4px"} // Adds some margin to the right of the circle
            />          
                <Text fontSize={14} fontWeight={"Bold"}>
                Diastolic
                </Text>
        </Flex>

                <Text fontSize={22} fontWeight={"Bold"}>
                    78
                    </Text>

      <Flex alignItems={"center"} gap={"8px"}>
            <Image 
            src={icons.ArrowDown}
             alt='arrow-down'
             w={"10px"}
             h={"5px"}
             />

                <Text fontSize={14}>
                    Lower than Average
                    </Text> 
                  </Flex>

        </Box>
    </Box>
   </Flex>
    </>
  
  )
}

export default Graph