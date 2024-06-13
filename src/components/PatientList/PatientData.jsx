import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons'

const PatientData = ({ name, age, gender, image }) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>

        <Flex gap={"12px"}>
        <Image
         src={image}
          alt='profile-pic' 
          w={"48px"} 
          h={"48px"}
          objectFit={"contain"}
          />
        <Box>
            <Text fontSize={14} fontWeight={"bold"}>
                {name}
            </Text>
            <Text fontSize={14} textColor={"#707070"}> 
                {gender}, {age}
                </Text>
        </Box>
    </Flex>

    <Image
     src={icons.moreHoriz}
     alt='moreHoriz'
      w={"18px"} 
      h={"4px"}
      />

    </Flex>
    
  )
}

export default PatientData