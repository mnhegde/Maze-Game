import React from 'react'
import { Flex,Button } from '@chakra-ui/react'
export default function Console() {
  return (
    <Flex direction="column" width="90%" height="97%" ml="5%" mt="3%">
        <Flex justifyContent="space-between" direction="row" width="100%">
        <Button>Algo 1</Button>
        <Button>Algo 2</Button>
        <Button>Algo 3</Button>
        <Button>Algo 4</Button>
        </Flex>
        <Flex justifyContent="left" mt="3%" direction="row" width="100%" height="100%">
        <Button mr="3%">Run</Button>
        <Button mr="3%">Submit</Button>
        <Flex height="100%" width="100%" backgroundColor="white">
          <h1>Console output here ie errors etc</h1>
        </Flex>
        </Flex>
    </Flex>
  )
}
