import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function ProfileTile({ name }) {
  return (
    <Flex>
      <Box>
        <Box bgColor="gray.400" border="2px solid #F3BA4A" borderRadius="50%" h="44px" w="44px" />
      </Box>
      <Text fontSize="sm" fontWeight="600" ml="15px">{name}</Text>
    </Flex>
  );
}
