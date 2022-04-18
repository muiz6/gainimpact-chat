import {
  Box, Flex, Image, Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import svgs from 'svgs';
import ProfileTile from './ProfileTile';
import UserTile from './UserTile';

export default function SideBar({
  profile, users, selectedUser, onSelectUser, onSignOut,
}) {
  const router = useRouter();
  return (
    <>
      <Box bgColor="primary" borderBottomRadius="14px" mb="2.5" pb="26px" pt="35px" px="30px">
        <ProfileTile name={profile.name} />
      </Box>
      <Flex bgColor="primary" flexDir="column" flexGrow="1" borderTopRadius="14px">
        <Box flexGrow="1" px="5" py="14px">
          {
            users.map((user) => (
              <Box py="2.5">
                <UserTile
                  active={user.id === selectedUser}
                  date={new Date(Date.parse(user.message?.createdAt))}
                  onClick={() => onSelectUser(user.id)}
                  subtitle={user.message?.body}
                  title={user.name}
                />
              </Box>
            ))
          }
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
