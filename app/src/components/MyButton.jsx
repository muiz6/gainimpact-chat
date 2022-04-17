import { Button, Image } from '@chakra-ui/react';
import React from 'react';

import svgs from 'svgs';

export default function MyButton({ children, onClick }) {
  return (
    <Button
      color="onSecondary"
      fontSize="sm"
      bgColor="secondary"
      borderRadius="14px"
      onClick={onClick}
      w="100%"
      _hover={{ bgColor: 'none' }}
    >
      {children}
      <Image src={svgs.plane} ml="1.5" />
    </Button>
  );
}
