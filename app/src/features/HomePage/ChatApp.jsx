import {
  Box, Button, Flex, Image,
} from '@chakra-ui/react';
import React from 'react';

import SideBar from './SideBar';

export default function ChatApp() {
  return (
    <Flex h="100vh">
      <Flex w="350px" direction="column">
        <SideBar />
      </Flex>
      <Box px="60px" py="30px">

      </Box>
    </Flex>
  );
}
