import { Box } from '@chakra-ui/react';

import React from 'react';
import Header from '../Header'
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box maxW="1200px" margin="auto" bg="purple.400">
        {children}
      </Box>
    </>
  );
}

export default Layout;
