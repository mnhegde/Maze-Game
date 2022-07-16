import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Flex
} from "@chakra-ui/react";
export default function Leaderboard() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" width="90%">
      <Heading>Leaderboard</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              
              <Th isNumeric> Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              
              <Td isNumeric>90</Td>
            </Tr>
            </Tbody>
           
           
        </Table>
      </TableContainer>
    </Flex>
  );
}
