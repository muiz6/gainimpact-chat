import { Box, chakra, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

import BrandHeader from 'components/BrandHeader';
import FormInput from 'components/FormInput';
import MyButton from 'components/MyButton';
import * as repository from 'services/repository';

export default function SignUpPage() {
  const refName = useRef(null);
  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);
  const router = useRouter();
  const refs = {
    refName, refUsername, refEmail, refPassword, refConfirmPassword,
  };
  return (
    <>
      <BrandHeader />
      <chakra.section px="5" py="20px">
        <Text fontSize="4xl" fontWeight="600" mb="29px" textAlign="center">Sign Up</Text>
        <chakra.form maxWidth="630px" mx="auto">
          <Box mb="22px">
            <FormInput placeholder="Enter your name" ref={refName} />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your username" ref={refUsername} />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your email" ref={refEmail} type="email" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Enter your password" ref={refPassword} type="password" />
          </Box>
          <Box mb="22px">
            <FormInput placeholder="Confirm Password" ref={refConfirmPassword} type="password" />
          </Box>
          <MyButton onClick={() => onSignUp(refs, router)}>Submit</MyButton>
        </chakra.form>
      </chakra.section>
    </>
  );
}

async function onSignUp(refs, router) {
  const {
    refName, refUsername, refEmail, refPassword, refConfirmPassword,
  } = refs;
  const name = refName.current.value;
  const username = refUsername.current.value;
  const email = refEmail.current.value;
  const password = refPassword.current.value;
  const confirmPassword = refConfirmPassword.current.value;
  if (name && username && email && password && confirmPassword) {
    if (password === confirmPassword) {
      const response = await repository.signUp({
        name, username, email, password, confirmPassword,
      });
      if (response) {
        router.replace('/sign-in');
      }
    }
  }
}
