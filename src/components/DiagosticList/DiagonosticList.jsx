import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const DiagonosticList = ({ DiagList }) => {

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
        {DiagList.map(item => 
        <Tr h={"59px"} key={item.name}>
            <Td fontSize={14}>{item.name}</Td>
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