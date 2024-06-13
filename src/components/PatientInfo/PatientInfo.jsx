import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import images from "../../constants/images";
import icons from "../../constants/icons";
import InfoData from './InfoData';
import LabResult from './LabResult';

const PatientInfo = () => {

  const infoData = [
    { logo: icons.BirthIcon, title: "Date Of Birth", subTitle: "August 23, 1996"},
    { logo: icons.FemaleIcon, title: "Gender", subTitle: "Female"},
    { logo: icons.PhoneIcon, title: "Contact Info", subTitle: "(415) 5663- 333"},
    { logo: icons.PhoneIcon, title: "Emergency Contacts", subTitle: "(415) 5663- 333"},
    { logo: icons.InsuranceIcon, title: "Insurance Provider", subTitle: "Sunrise Health Assurance"},
  ]
  const resultParams = [
    {name: "BloodTests", icon: icons.DownloadIcon},
    {name: "CT Scans", icon: icons.DownloadIcon},
    {name: "Radiology Reports", icon: icons.DownloadIcon},
    {name: "X-Rays", icon: icons.DownloadIcon},
    {name: "Urine Test", icon: icons.DownloadIcon},
    {name: "Urine Test", icon: icons.DownloadIcon},
    {name: "Urine Test", icon: icons.DownloadIcon},
  ]
  return (
    <>
    <Box 
    w={"367px"}
     h={"740px"}
     backgroundColor={"#FFFFFF"}
     borderRadius={"16px"}
     px={"20px"}
     >

      <Box 
          display={"flex"}
          flexDir={"column"}
            alignItems={"center"}
        >
         <Image 
            src={images.Layer2} 
            alt='patient-image' 
            w={"200px"}
            h={"200px"}
            objectFit={"contain"}
            mt={"32px"}
      />
      <Text fontSize={24} fontWeight={"bold"} py={"32px"}>
        Jessica Taylor
        </Text>
      </Box>

  {infoData.map(item => (
    <Box>
        <InfoData 
        image={item.logo}
         title={item.title}
          subTitle={item.subTitle}
           />
      </Box>
  ))}

  <Button 
  w={"full"}
   bgColor={"#01F0D0"} 
   size={"lg"} 
   fontSize={14}
   borderRadius={"41px"}
   >
    Show All Information
  </Button>
      
    </Box>



    <Box 
    w={"367px"}
    h={"296px"}
    bgColor={"#FFFFFF"}
    borderRadius={"16px"}
    mt={"32px"}
    mb={"10px"}
    px={"22px"}
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
      <Text
       fontSize={24}
        fontWeight={"extrabold"}
         pt={"20px"} 
         pb={"16px"}
         position="sticky" 
         top="-1" 
         backgroundColor={"#FFFFFF"} 
         zIndex={1}
         > 
        Lab Results 
        </Text>

  {resultParams.map(item => (
     <Box>
          <LabResult name={item.name} icon={item.icon} />
        </Box>
  ))}
       
    </Box>
    </>
  )
}

export default PatientInfo