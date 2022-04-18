import { Box, Flex, Input } from '@chakra-ui/react';
import React from 'react';

import MyButton from 'components/MyButton';
import DateGroup from './DateGroup';
import MessageGroup from './MessageGroup';

export default function MessageBox({ chat }) {
  return (
    <Flex flexDirection="column" h="100%">
      <Flex flexDirection="column" flexGrow="1" justifyContent="end" pb="2.5">
        {
          chat.dates.map((d) => (
            <DateGroup date={d.date}>
              <Flex flexDir="column-reverse">
                {
                  d.messageGroups.map((g) => (
                    <MessageGroup messages={g.messages} name={g.name} self={g.self} />
                  ))
                }
              </Flex>
            </DateGroup>
          ))
        }
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
