import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
    Lists: any[]
}

const CardItem: React.FC<IProps> = ({ Lists }) => {
    return (
        <Box >
            <Flex justifyContent="space-between" flexWrap="wrap">
                {
                    Lists.map((item: any, index: number) => (
                        <Box w="100" height="200" borderRadius="20px" boxShadow="xl" key={index} bg="green.300" p="20px" m="20px">
                            <Text overflow="hidden">{item.difficulty}</Text>
                            <Text overflow="hidden">{item.correct_answer}</Text>
                            <Text overflow="hidden">{item.question}</Text>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
    );
}

export default CardItem;