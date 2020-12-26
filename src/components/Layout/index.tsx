import { Box } from '@chakra-ui/react';

import React from 'react';
import Header from '../Header'
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box maxW="3xl" margin="auto">
        {children}
      </Box>
    </>
  );
}

export default Layout;
