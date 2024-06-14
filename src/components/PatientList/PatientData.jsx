import { Box, Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import icons from '../../constants/icons'
import { getPatient, getPatients } from '../../lib/requests';
import { PatientContext } from '../../hooks/PatientContext';

const PatientData = ({ name, age, gender, image }) => {

  const { selectedPatient, setSelectedPatient } = useContext(PatientContext);
  const isSelected = selectedPatient && selectedPatient.name === name;
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch patients on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
       
        const data = await getPatients();
        setPatients(data);

        // Set initial patient if there are patients available
        if (data.length > 0) {
          const initialPatient = data[3] || data[0]; // Fallback to the first patient if less than 4 patients
          const patientData = await getPatient(initialPatient.name);
          setSelectedPatient(patientData);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, [setSelectedPatient]);

  // Handle patient selection
  const handlePatientClick = async (patientName) => {
    try {
      const patientData = await getPatient(patientName);
      setSelectedPatient(patientData);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };
  

  return (
    <Flex 
    alignItems={"center"}
     justifyContent={"space-between"}
     onClick={() => handlePatientClick(name)}
     bg={isSelected ? '#D8FCF7' : 'white'}
     borderRadius={4}
     h={"60px"}
     px={"10px"}
     cursor={"pointer"}
      >


  <Tooltip
				hasArrow
				label={name}
			
				ml={1}
				openDelay={500}
				display={{ base: "block", xl: "none" }}
			>
        <Flex gap={"12px"} > 
        <Image
         src={image}
          alt='profile-pic' 
          w={"48px"} 
          h={"48px"}
          objectFit={"contain"}
          
          />
        <Box display={{ base: "none", xl: "block"}}>
            <Text fontSize={14} fontWeight={"bold"}>
                {name}
            </Text>
            <Text fontSize={14} textColor={"#707070"}> 
                {gender}, {age}
                </Text>
        </Box>
    </Flex>

    </Tooltip>

    <Image
     src={icons.moreHoriz}
     alt='moreHoriz'
      w={"18px"} 
      h={"4px"}
      display={{ base: "none", xl: "flex"}}
      />

    </Flex>
    
  )
}

export default PatientData