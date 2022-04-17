import { Center, CircularProgress } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as repository from 'services/repository';
import ChatApp from './ChatApp';

export default function HomePage() {
  const router = useRouter();
  const [response, setResponse] = useState(null);
  useEffect(() => {
    if (repository.isUserSignedIn()) {
      (async () => {
        setResponse(await repository.getChatPg());
      })();
    } else {
      router.push('/sign-up');
    }
  }, []);
  return response
    ? (<ChatApp data={response} />)
    : (
      <Center h="100vh">
        <CircularProgress color="secondary" isIndeterminate />
      </Center>
    );
}
