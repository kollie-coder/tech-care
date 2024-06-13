import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LabResult = ({name, icon}) => {
  return (
    <>
    <Button
     w={"315px"} 
     h={"40px"} 
     mb={"5px"}
     justifyContent={"space-between"}
     bgColor={"#FFFFFF"}
     >
        <Text fontSize={14}>{name} </Text>
        
        <Image 
        src={icon}
         alt='download-icon'
         w={"20px"}
         h={"20px"}
          />
    </Button>
    </>
  )
}

export default LabResult