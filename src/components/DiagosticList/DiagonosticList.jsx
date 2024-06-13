import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const DiagonosticList = () => {

    const dataTable = [
        { diagnosis: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
        { diagnosis: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
        { diagnosis: "Asthma", description: "Recurrent episodes of bronchial", status: "Inactive" },
        { diagnosis: "Cancer", description: "Chronic high blood pressure", status: "Cured" }
    ]

  return (
    <TableContainer>
    <Table variant='simple' size="md">
     
      <Thead>
        <Tr h={"48px"} bgColor={"#F6F7F8"}>
          <Th fontSize={14}>Problem/Diagnosis</Th>
          <Th fontSize={14}>Description</Th>
          <Th fontSize={14}>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
 {dataTable.map(item => 
    <Tr h={"59px"}>
          <Td fontSize={14}>{item.diagnosis}</Td>
          <Td fontSize={14}>{item.description}</Td>
          <Td fontSize={14}>{item.status}</Td>
        </Tr>
 )}
        
        
      </Tbody>
      
    </Table>
  </TableContainer>
  )
}

export default DiagonosticList