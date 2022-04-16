import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#E3F6FC',
  onPrimary: '#52585D',
  secondary: '#6588DE',
  onSecondary: '#FDFDFE',
  background: '',
  onBackground: '#52585D',
};

const styles = {
  global: {
    body: {
      background: 'linear-gradient(107.56deg, #FFFFFF 0%, #F2F6F7 100%)',
      color: colors.onBackground,
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '400',
    },
    li: {
      listStyleType: 'none',
    },
  },
};

export default extendTheme({ colors, styles });
