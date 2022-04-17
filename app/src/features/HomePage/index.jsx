import { Center, CircularProgress } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as repository from 'services/repository';
import ChatApp from './ChatApp';

export default function HomePage() {
  const router = useRouter();
  const [success, setSuccess] = useState();
  useEffect(() => {
    if (repository.isUserSignedIn()) {
      setSuccess(true);
    } else {
      router.push('/sign-up');
    }
  }, []);
  return success
    ? (<ChatApp />)
    : (
      <Center h="100vh">
        <CircularProgress color="secondary" isIndeterminate />
      </Center>
    );
}
