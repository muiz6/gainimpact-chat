import { Input } from '@chakra-ui/react';
import React from 'react';

export default function FormInput({ name, placeholder, type }) {
  return (
    <Input
      bgColor="#FDFDFD"
      borderRadius="14px"
      name={name}
      placeholder={placeholder}
      px="14px"
      type={type}
      _placeholder={{
        color: '#96A9BA',
        fontSize: 'sm',
        fontWeight: '300',
      }}
    />
  );
}
