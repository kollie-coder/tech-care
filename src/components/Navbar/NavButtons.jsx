import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const NavButtons = ({ name, icon }) => {

  return (
    <>
    <Flex 
    alignItems="center"
    justifyContent="center"
     gap="10px" 
     alignContent="space-between"
     
     
     >
        <Image src={icon} w={"16px"} h={"17px"} objectFit={"contain"}/>
        <Text fontSize={"14px"} fontFamily={"manrope"}>{name}</Text>
    </Flex>
    </>
  )
}

export default NavButtons