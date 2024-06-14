import { Box, Container, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import icons from '../../constants/icons'
import NavButtons from './NavButtons'
 
const Navbar = () => {

  const [ activeNav, setIsActiveNav ] = useState("Patient")

  const navData =  [
   { name: "Overview", icon: icons.home },
   { name: "Patient", icon: icons.group },
   { name: "Schedule", icon: icons.calender },
   { name: "Message", icon: icons.chat },
   { name: "Transactions", icon: icons.creditCard }
  ]

  const handleNavClick = (name) => {
    setIsActiveNav(name)
  }

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
          <Box 
          key={item.name}
          onClick={() => handleNavClick(item.name)}
          bgColor={activeNav ===item.name ? "#01F0D0" : "transparent" }
          borderRadius={"41px"}
          alignContent={"center"}
          w={"122px"}
          h={"41px"}
          cursor={"pointer"}
          display={{ base: "none", xl: "block"}}
          >
               <NavButtons
          name={item.name}
          icon={item.icon}

          />
          </Box>
       

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
