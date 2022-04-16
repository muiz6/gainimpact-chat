import { Button } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({ children }) {
  return (
    <Button
      color="onSecondary"
      fontSize="sm"
      bgColor="secondary"
      borderRadius="14px"
      w="100%"
      _hover={{ bgColor: 'none' }}
    >
      {children}
    </Button>
  );
}
