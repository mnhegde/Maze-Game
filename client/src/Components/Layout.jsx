import React from 'react'
import { Flex } from '@chakra-ui/react'
import IDE from './IDE'
import Console from './Console'
export default function Layout() {
  return (
    <Flex height="100vh" direction="row">
        <Flex direction="column" width="50vw" height="100vh">
            <Flex direction="column" backgroundColor="red" width="50vw" height="75vh">
              <IDE/>
            </Flex>
            <Flex direction="column" backgroundColor="blue" width="50vw" height="25vh">
              <Console/>
            </Flex>
        </Flex>
        <Flex direction="column" width="50vw" height="100vh">
            <Flex direction="column" backgroundColor="green" width="50vw" height="50vh">
            
            </Flex>
            <Flex direction="column" backgroundColor="orange" width="50vw" height="50vh">
            
            </Flex>
    
        </Flex>
    </Flex>
  )
}
