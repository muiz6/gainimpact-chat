import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function UserTile({
  active, title, subtitle, date,
}) {
  return (
    <Flex
      p="15px"
      bgColor={active ? 'secondary' : ''}
      borderRadius="14px"
      boxShadow={active ? '0px 8px 40px rgba(0, 72, 251, 0.3)' : ''}
      color={active ? 'onSecondary' : ''}
      cursor="pointer"
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

function formatDate(date) {
  if (date) {
    const day = date.getDay().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    return `${day}/${month}/${date.getFullYear()}`;
  }
  return '';
}
