import { Image } from '@chakra-ui/react';
import React from 'react';

import svgs from 'svgs';
import MyButton from './MyButton';

export default function SubmitButton() {
  return (
    <MyButton>
      Submit
      <Image src={svgs.plane} ml="1.5" />
    </MyButton>
  );
}
