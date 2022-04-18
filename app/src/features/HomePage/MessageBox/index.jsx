import { Box, Flex, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';

import MyButton from 'components/MyButton';
import DateGroup from './DateGroup';
import MessageGroup from './MessageGroup';
import * as viewmodel from '../home_viewmodel';

export default function MessageBox({ chat }) {
  return (
    <Flex flexDirection="column" h="100%">
      <Flex
        flexDirection="column-reverse"
        flexGrow="1"
        justifyContent="end"
        pt="30px"
        px="60px"
        overflow="auto"
        pb="2.5"
      >
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
  const refInput = useRef(null);
  return (
    <Flex borderRadius="14px" border="1px solid #96A9BAB2" mx="60px" mb="30px">
      <Input
        border="none"
        flexGrow="1"
        placeholder="Type a new message..."
        ref={refInput}
        _focus={{ border: 'none' }}
      />
      <Box>
        <MyButton onClick={() => onSendMessage(refInput)}>Send</MyButton>
      </Box>
    </Flex>
  );
}

function onSendMessage(refInput) {
  if (refInput.current?.value) {
    viewmodel.sendMessage(refInput.current.value);
    refInput.current.value = '';
  }
}
