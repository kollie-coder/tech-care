import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const InfoData = ({ image, title, subTitle }) => {
  return (
    <Flex 
    alignItems={"center"} 
    justifyItems={"center"}
    gap={"16px"}
    pb={"24px"}
    >
        <Image 
        src={image} 
        alt='patient-image' 
        w={"42px"}
        h={"42px"}
        />
        <Box>
            <Text fontSize={14}>
                {title}
            </Text>
            <Text fontSize={14} fontWeight={"bold"}>
                 {subTitle} 
                 </Text>
        </Box>
    </Flex>
  )
}

export default InfoData