import {
  Box, Flex, Image, Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import * as repository from 'services/repository';
import svgs from 'svgs';
import ProfileTile from './ProfileTile';
import UserTile from './UserTile';

export default function SideBar() {
  const router = useRouter();
  return (
    <>
      <Box bgColor="primary" borderBottomRadius="14px" mb="2.5" pb="26px" pt="35px" px="30px">
        <ProfileTile name="Name" />
      </Box>
      <Flex bgColor="primary" flexDir="column" flexGrow="1" borderTopRadius="14px">
        <Box flexGrow="1" px="5" py="14px">
          <Box py="2.5">
            <UserTile title="James" subtitle="subtitle" date={new Date()} active />
          </Box>
          <Box py="2.5">
            <UserTile title="Michael" subtitle="subtitle" date={new Date()} />
          </Box>
        </Box>
        <Box pb="21px" pt="23px" px="15px" borderTop="1px solid #D0D9DF">
          <Button
            bgColor="transparent"
            onClick={() => onSignOut(router)}
            _hover={{ bgColor: 'none' }}
          >
            <Image src={svgs.signOut} />
          </Button>
        </Box>
      </Flex>
    </>
  );
}

function onSignOut(router) {
  repository.signOut();
  router.replace('/sign-up');
}
