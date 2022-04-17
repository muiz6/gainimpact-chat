import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { formatDate } from 'util';

export default function UserTile({
  active, date, onClick, subtitle, title,
}) {
  return (
    <Flex
      p="15px"
      bgColor={active ? 'secondary' : ''}
      borderRadius="14px"
      boxShadow={active ? '0px 8px 40px rgba(0, 72, 251, 0.3)' : ''}
      color={active ? 'onSecondary' : ''}
      cursor="pointer"
      onClick={onClick}
    >
      <Box>
        <Box bgColor="gray.400" border="2px solid #F3BA4A" borderRadius="50%" h="44px" w="44px" />
      </Box>
      <Box ml="14px" flexGrow="1">
        <Flex alignItems="center">
          <Text flexGrow="1" fontSize="xs" fontWeight="600" mb="3px">{title}</Text>
          <Text fontSize="10px">{formatDate(date)}</Text>
        </Flex>
        <Text fontSize="10px" fontWeight="300">{subtitle}</Text>
      </Box>
    </Flex>
  );
}
