import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import MessageBox from './MessageBox';
import SideBar from './SideBar';

export default function ChatApp({ data }) {
  return (
    <Flex h="100vh">
      <Flex w="350px" direction="column">
        <SideBar profile={data.profile} users={data.users} selectedUser={data.chat.selectedUser} />
      </Flex>
      <Box flexGrow="1" px="60px" py="30px">
        <MessageBox chat={data.chat} />
      </Box>
    </Flex>
  );
}
