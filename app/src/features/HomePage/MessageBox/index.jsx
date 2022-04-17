import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';

import MyButton from 'components/MyButton';
import DateGroup from './DateGroup';
import MessageGroup from './MessageGroup';

export default function MessageBox({ messages }) {
  return (
    <Flex flexDirection="column" h="100%">
      <Flex flexDirection="column" flexGrow="1" justifyContent="end" pb="2.5">
        <DateGroup date={new Date()}>
          <MessageGroup messages={messages} name="Name" self />
          <MessageGroup messages={messages} name="Name" />
        </DateGroup>
      </Flex>
      <InputBar />
    </Flex>
  );
}

function InputBar() {
  return (
    <Flex borderRadius="14px" border="1px solid #96A9BAB2">
      <Input
        border="none"
        flexGrow="1"
        placeholder="Type a new message..."
        _focus={{ border: 'none' }}
      />
      <Box>
        <MyButton>Send</MyButton>
      </Box>
    </Flex>
  );
}
