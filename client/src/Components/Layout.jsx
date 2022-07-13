import React from 'react'
import { Flex } from '@chakra-ui/react'
import IDE from './IDE'
import Console from './Console'
import Maze from './Maze'
import Leaderboard from './Leaderboard'
export default function Layout() {
  return (
    <Flex height="100vh" direction="row">
        <Flex direction="column" width="50vw" height="100vh">
            <Flex border="1px solid black"  direction="column" backgroundColor="white" width="50vw" height="75vh">
              <IDE/>
            </Flex>
            <Flex border="1px solid black"  direction="column" backgroundColor="white" width="50vw" height="25vh">
              <Console/>
            </Flex>
        </Flex>
        <Flex direction="column" width="50vw" height="100vh">
            <Flex border="1px solid black" direction="column" backgroundColor="white" width="50vw" height="50vh">
            <Maze/>
            </Flex>
            <Flex border="1px solid black"  direction="column" backgroundColor="white" width="50vw" height="50vh">
            <Leaderboard/>
            </Flex>
    
        </Flex>
    </Flex>
  )
}
