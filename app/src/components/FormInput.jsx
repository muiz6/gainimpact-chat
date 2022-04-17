import { Input } from '@chakra-ui/react';
import React from 'react';

export default React.forwardRef(({ placeholder, type }, ref) => (
  <Input
    bgColor="#FDFDFD"
    borderRadius="14px"
    placeholder={placeholder}
    px="14px"
    ref={ref}
    type={type}
    _placeholder={{
      color: '#96A9BA',
      fontSize: 'sm',
      fontWeight: '300',
    }}
  />
));
