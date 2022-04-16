import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import BrandHeader from 'components/BrandHeader';
import FormInput from 'components/FormInput';
import SubmitButton from 'components/SubmitButton';

export default function SignUpPage() {
  return (
    <>
      <BrandHeader />
      <chakra.section px="5" py="20px">
        <Text fontSize="4xl" fontWeight="600" mb="29px" textAlign="center">Sign Up</Text>
        <chakra.form maxWidth="630px" mx="auto">
          <Box mb="22px">
            <FormInput placeholder="Enter your name" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your username" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your email" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your password" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Confirm Password" />
          </Box>
          <SubmitButton />
        </chakra.form>
      </chakra.section>
    </>
  );
}
