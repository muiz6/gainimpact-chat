import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import BrandHeader from 'components/BrandHeader';
import FormInput from 'components/FormInput';
import SubmitButton from 'components/SubmitButton';

export default function SignInPage() {
  return (
    <>
      <BrandHeader />
      <chakra.section px="5" py="20px">
        <Text fontSize="4xl" fontWeight="600" mb="29px" textAlign="center">Sign In</Text>
        <chakra.form maxWidth="630px" mx="auto">
          <Box mb="22px">
            <FormInput placeholder="Enter your username" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your password" />
          </Box>
          <SubmitButton />
        </chakra.form>
      </chakra.section>
    </>
  );
}
