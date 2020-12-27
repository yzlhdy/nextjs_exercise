import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
    Lists: any[]
}

const CardItem: React.FC<IProps> = ({ Lists }) => {
    return (
        <Box >
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                {
                    Lists.map((item: any, index: number) => (
                        <Box w="100" height="200" borderRadius="20px" boxShadow="xl" key={index} bg="green.300" p="20px" m="20px">
                            <Text overflow="hidden">{item.difficulty}</Text>
                            <Text overflow="hidden">{item.correct_answer}</Text>
                            <Text overflow="hidden">{item.question}</Text>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default CardItem;