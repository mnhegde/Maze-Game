import React from 'react'
import { Flex, Button, Select } from '@chakra-ui/react'
export default function Console() {
  return (
    <Flex direction="column" width="90%" height="97%" ml="5%" mt="3%">
      <Flex justifyContent="space-between" direction="row" width="100%">
        <Select placeholder='Select Algorithim' width="50%">
          <option value='algo1'>Algo 1</option>
          <option value='algo1'>Algo 2</option>
          <option value='algo1'>Algo 3</option>
          <option value='algo1'>Custom</option>
        </Select>
        <Button>Run</Button>
        <Button>Test</Button>
      </Flex>
      <Flex justifyContent="left" mt="3%" border="1px solid black" direction="row" width="100%" height="100%">
        <Flex height="100%" width="100%" backgroundColor="white">
          <h1>Console output here ie errors etc</h1>
        </Flex>
      </Flex>
    </Flex>
  )
}
