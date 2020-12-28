import React from 'react'
import Layout from '../components/Layout'
import { Box, Button, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { NextSeo } from 'next-seo'

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(Box)
const MotionText = motion.custom(Text)
const MotionButton = motion.custom(Button)
const MotionListItem = motion.custom(ListItem)


const About: React.FC = () => {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    const seo = {
        title: "一只灵活的羊",
        description: '一只灵活的养'
    }
    const childVariants = {
        hidden: {
            opacity: 0,
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.5,
                stiffness: 600,
                when: 'beforeChildren'
            }
        }
    }
    return (
        <Layout>
            <NextSeo {...seo}></NextSeo>
            <Flex justifyContent="space-around" >
                <MotionBox w="200px" h="200px" bg="green.300" borderRadius="20px"
                    initial={{ y: 100, opacity: .2 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: .5, stiffness: 500 }}
                >
                </MotionBox>

                <MotionBox
                    initial={{ x: 100, opacity: .2 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', delay: .9 }}
                >
                    <MotionButton colorScheme="blue.200" bg="green.300" color="white" px={10} py="4"
                        whileHover={{
                            scale: 1.2,
                            textShadow: 'unset',
                            boxShadow: "initial",
                            color: 'pink'
                        }}
                    >Submit</MotionButton>
                </MotionBox>
            </Flex>
            <OrderedList pl="30px" mt="30px" lineHeight="50px">
                <MotionListItem
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                >Lorem ipsum dolor sit amet</MotionListItem>
                <ListItem>Consectetur1 adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>
        </Layout>
    )
}

export default About