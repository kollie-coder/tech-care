import { Box, Container, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import icons from '../../constants/icons'
import NavButtons from './NavButtons'
 
const Navbar = () => {

  const navData =  [
   { name: "Overview", icon: icons.home },
   { name: "Patient", icon: icons.group },
   { name: "Schedule", icon: icons.calender },
   { name: "Message", icon: icons.chat },
   { name: "Transactions", icon: icons.creditCard }
  ]

  return (
    <Container maxW={"1564px"} my={4}> 

      <Flex h={"72px"} alignItems={"center"} 
      justifyContent={"space-between"} borderRadius={"70px"} 
      backgroundColor={"#FFFFFF"} px="32px">
       
        <Image 
        src={icons.TestLogo}
        width={"211px"}
        height={"48px"}
        />

        {navData.map(item => (
          
          <NavButtons
          name={item.name}
          icon={item.icon}
          />

        ))}

        <Flex alignItems={"center"} alignContent={"space-between"} gap={"12px"}>
          <Flex alignItems="center" gap="8px">
             <Image src={icons.seniorWoman} alt='senior-woman' w="44px" h="44px" objectFit="contain" />
             <Box>
              <Text textColor={"#072635"} fontSize={14} fontWeight={"bold"} >Dr. Jose Simmons</Text>
              <Text textColor={"#707070"} fontSize={14}>General Practitioner</Text>
             </Box>
          </Flex>

          <Divider orientation='vertical' height= "44px" color={"#EDEDED"}/>
          
          <Flex alignItems={"center"} alignContent={"space-between"} gap={"12px"}>
            <Image src={icons.settings} alt='settings' width="19px" height="20px"/>

            <Image src={icons.moreVert} alt='moreVert' width="4px" height="18px"/>
          </Flex>
          
        </Flex>
        

      </Flex>
    </Container>
  )
}

export default Navbar
