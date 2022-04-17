import { Box, chakra, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import BrandHeader from 'components/BrandHeader';
import FormInput from 'components/FormInput';
import MyButton from 'components/MyButton';
import * as repository from 'services/repository';

export default function SignInPage() {
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const router = useRouter();
  return (
    <>
      <BrandHeader />
      <chakra.section px="5" py="20px">
        <Text fontSize="4xl" fontWeight="600" mb="29px" textAlign="center">Sign In</Text>
        <chakra.form maxWidth="630px" mx="auto">
          <Box mb="22px">
            <FormInput placeholder="Enter your username" ref={refUsername} />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your password" ref={refPassword} />
          </Box>
          <MyButton onClick={() => onSignIn(refUsername, refPassword, router)}>Submit</MyButton>
        </chakra.form>
      </chakra.section>
    </>
  );
}

async function onSignIn(refUsername, refPassword, router) {
  const username = refUsername.current.value;
  const password = refPassword.current.value;
  if (username && password) {
    const response = await repository.signIn(username, password);
    if (response) {
      router.replace('/');
    }
  }
}
