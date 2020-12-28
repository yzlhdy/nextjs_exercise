import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'
const MotionBox = motion.custom(Box)
const MotionText = motion.custom(Text)
interface IProps {
    Lists: any[]
}

const CardItem: React.FC<IProps> = ({ Lists }) => {
    return (
        <Box >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)', lg: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)' }} gap={3} >
                {
                    Lists.map((item: any, index: number) => (
                        <MotionBox w="100" height="200" borderRadius="20px" boxShadow="xl" key={index} bg="green.300" p="20px" m="20px"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: 0.5, }}
                        >
                            <Text overflow="hidden">{item.difficulty}</Text>
                            <MotionText overflow="hidden"
                                initial={{ x: 200, opacity: .2 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "keyframes", delay: 0.5 }}
                            >{item.correct_answer}</MotionText>
                            <Text overflow="hidden">{item.question}</Text>
                        </MotionBox>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default CardItem;