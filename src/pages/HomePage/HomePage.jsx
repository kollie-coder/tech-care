import React, { useContext } from 'react'
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import VitalsCard from '../../components/VitalsCard/VitalsCard'
import DiagonosticList from '../../components/DiagosticList/DiagonosticList'
import Graph from '../../components/Graph/Graph'
import useRequest from '../../lib/useRequest'
import { getPatient } from '../../lib/requests'
import { PatientContext } from '../../hooks/PatientContext'

const HomePage = () => {

  // Extracting Latest diagnosis data
  const { selectedPatient } = useContext(PatientContext);

 const LatestDiagnosis = selectedPatient;

 if (!LatestDiagnosis) {
  return <Text>Loading... Please wait </Text>;
}

// Extarcting Diagnosis History
const DiagHistory = LatestDiagnosis.diagnosis_history



   // Extracting vitals data
   const respiratoryRate = DiagHistory[0].respiratory_rate;
   const heartRate = DiagHistory[0].heart_rate;
   const temperature = DiagHistory[0].temperature;


   // To retrieve the DiagnosticList
   const DiagnosticList = LatestDiagnosis.diagnostic_list;

   

  return (
   <>
   
    <Box 
      w={"766px"}
      h={"673px"}
      bgColor={"#FFFFFF"}
      borderRadius={"16px"}
      mx={"auto"}
    >
    <Text px={"20px"} py={"20px"} fontSize={24} fontWeight={"bold"}>
      Diagnosis History
      </Text>
    
    <Box 
        w={"726px"}
        h={"298px"}
        bgColor={"#F4F0FE"}
        borderRadius={"12px"}
        mt={"20px"}
        mx={"20px"}
        px={"16px"}
        py={"16px"}
        >
         <Graph patientData={LatestDiagnosis} />
    </Box>

     <VitalsCard respiratoryRate={respiratoryRate} heartRate={heartRate} temperature={temperature} />

   </Box>

   <Box w={"766px"} h={"349px"} bgColor={"#FFFFFF"} 
   borderRadius={"16px"} mx={"auto"} mt={"32px"}  
   overflowY={'auto'} px={"20px"} py={"20px"}
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
      
      
    }}>
    <Text fontSize={"24px"} fontWeight={"Bold"} position="sticky" top="-5" 
         backgroundColor={"#FFFFFF"} zIndex={1}>
      Diagnostic List 
      </Text>

      <Box mt={"40px"} >
        
        <DiagonosticList DiagList={DiagnosticList}/>
      </Box>
   </Box>
   
   

   </>
  )
}

export default HomePage