import {
  Box, Center, CircularProgress, Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as viewmodel from './home_viewmodel';
import MessageBox from './MessageBox';
import SideBar from './SideBar';

export default function HomePage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (viewmodel.isUserSignedIn()) {
      viewmodel.getChatDataObservable().subscribe((value) => {
        console.log(value);
        setData({ ...value });
      });
    } else {
      router.push('/sign-up');
    }
  }, []);
  return data
    ? (
      <Flex h="100vh">
        <Flex w="350px" direction="column">
          <SideBar
            profile={data.profile}
            users={data.users}
            selectedUser={data.chat.selectedUser}
            onSelectUser={(userId) => viewmodel.selectUser(userId)}
            onSignOut={() => onSignOut(router)}
          />
        </Flex>
        <Box flexGrow="1" px="60px" py="30px">
          <MessageBox chat={data.chat} />
        </Box>
      </Flex>
    )
    : (<LoadingScreen />);
}

function LoadingScreen() {
  return (
    <Center h="100vh">
      <CircularProgress color="secondary" isIndeterminate />
    </Center>
  );
}

function onSignOut(router) {
  viewmodel.signOut();
  router.replace('/sign-up');
}
