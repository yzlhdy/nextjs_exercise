import { Box, Flex, useColorMode, Icon } from '@chakra-ui/react';
import React from 'react';
import { SunIcon, MoonIcon, WarningIcon } from '@chakra-ui/icons'

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg="pink.200" w="100%" h="10">
      <Box maxWidth="3xl" margin="auto" w="100%" h="100%">
        <Flex justifyContent="space-between" h="100%" alignItems="center">
          <Box>
            123
          </Box>
          <Box onClick={toggleColorMode}>
            {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
          </Box>
        </Flex>

      </Box>

    </Box>
  );
}

export default Header;
