import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

import { formatDate } from 'util';

export default function DateGroup({ children, date }) {
  return (
    <>
      <Center>
        <Box bgColor="secondary" borderRadius="14px" color="onSecondary" py="1" px="5">
          <Text fontSize="xs">{formatDate(date)}</Text>
        </Box>
      </Center>
      {children}
    </>
  );
}
