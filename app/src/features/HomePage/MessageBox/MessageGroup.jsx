import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function MessageGroup({ messages, name, self }) {
  if (self) {
    return (<SelfMessages messages={messages} name={name} />);
  }
  return (<OtherMessages messages={messages} name={name} />);
}

function SelfMessages({ messages, name }) {
  return (
    <Box>
      <Text fontSize="xs" fontWeight="600" mb="9px">{name}</Text>
      <Flex pb="5">
        <Box>
          <Box bgColor="gray.400" border="2px solid #F3BA4A" borderRadius="50%" h="44px" w="44px" />
        </Box>
        <Flex flexDir="column-reverse" ml="2.5">
          {messages.map((message) => (
            <Box
              bgColor="primary"
              borderRadius="0px 14px 14px 14px"
              mb="2.5"
              px="5"
              pt="4"
              pb="14px"
            >
              <Text fontSize="xs">{message.body}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

function OtherMessages({ messages, name }) {
  return (
    <Box>
      <Text fontSize="xs" fontWeight="600" mb="9px" textAlign="right">{name}</Text>
      <Flex direction="row-reverse" pb="5">
        <Box>
          <Box bgColor="gray.400" border="2px solid #F3BA4A" borderRadius="50%" h="44px" w="44px" />
        </Box>
        <Box mr="2.5">
          {messages.map((message) => (
            <Box
              bgColor="#F3BA4A"
              borderRadius="14px 0px 14px 14px"
              mb="2.5"
              px="5"
              pt="4"
              pb="14px"
            >
              <Text fontSize="xs">{message.body}</Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
