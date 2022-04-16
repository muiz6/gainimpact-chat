import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function BrandHeader() {
  return (
    <chakra.header bgColor="primary" py="7">
      <chakra.h1 color="onPrimary" fontSize="50px" fontWeight="600" textAlign="center">
        Gain Impact Chat
      </chakra.h1>
    </chakra.header>
  );
}
