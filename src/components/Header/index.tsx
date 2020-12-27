import { Box, Flex, useColorMode, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SunIcon, MoonIcon, WarningIcon } from '@chakra-ui/icons'

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("blue.500", "green.500")


  return (
    <Box bg={bg} w="100%" h="10">
      <Box maxWidth="1200px" margin="auto" w="100%" h="100%">
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
