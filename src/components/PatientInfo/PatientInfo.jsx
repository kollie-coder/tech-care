import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import images from "../../constants/images";
import icons from "../../constants/icons";
import InfoData from './InfoData';
import LabResult from './LabResult';
import useRequest from '../../lib/useRequest';
import { getPatient } from '../../lib/requests';
import { PatientContext } from '../../hooks/PatientContext';


const PatientInfo = () => {


  const { selectedPatient } = useContext(PatientContext);

 const data = selectedPatient;

 if (!data) {
  return <Text mr={"20px"}>Loading...</Text>;
}


  const infoData = [
    { logo: icons.BirthIcon, title: "Date Of Birth", subTitle: data.date_of_birth},
    { logo: icons.FemaleIcon, title: "Gender", subTitle: data.gender },
    { logo: icons.PhoneIcon, title: "Contact Info", subTitle: data.phone_number },
    { logo: icons.PhoneIcon, title: "Emergency Contacts", subTitle: data.emergency_contact},
    { logo: icons.InsuranceIcon, title: "Insurance Provider", subTitle: data.insurance_type },
  ]

  const labResults = Array.isArray(data.lab_results)
  ? data.lab_results.map((result, index) => ({
      name: result,
      icon: icons.DownloadIcon, // Uniform icon assumption
      key: `lab-result-${index}`,
    }))
  : [];

  return (
    <>
    <Box 
    w={"367px"}
     h={"740px"}
     backgroundColor={"#FFFFFF"}
     borderRadius={"16px"}
     px={"20px"}
     mx={"16px"}
     >

      <Box 
          display={"flex"}
          flexDir={"column"}
            alignItems={"center"}
        >
         <Image 
            src={data.profile_picture} 
            alt='patient-image' 
            w={"200px"}
            h={"200px"}
            objectFit={"contain"}
            mt={"32px"}
      />
      <Text fontSize={24} fontWeight={"bold"} py={"32px"}>
         {data.name}
        </Text>
      </Box>

  {infoData.map(item => (
     <Box key={item.title}>
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
    mx={"16px"}
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
         top="-6" 
         backgroundColor={"#FFFFFF"} 
         zIndex={1}
         > 
        Lab Results 
        </Text>

        {labResults.map(item => (
          <Box key={item.key}>
            <LabResult name={item.name} icon={item.icon} />
          </Box>
        ))}
       
    </Box>
    </>
  )
}

export default PatientInfo