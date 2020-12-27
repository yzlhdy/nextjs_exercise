import React from 'react'
import Layout from '../components/Layout'
import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { NextSeo } from 'next-seo'

// 1. Create a custom motion component from Box
const MotionBox = motion.custom(Box)
const MotionText = motion.custom(Text)
const About: React.FC = () => {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    const seo = {
        title: "一只灵活的羊",
        description: '一只灵活的养'
    }
    return (
        <Layout>
            <NextSeo {...seo}></NextSeo>
            <MotionBox bg="green.500" animate="hidden" w="100px" h="100px" initial={{ scale: 0 }}
            >
            </MotionBox>
            <MotionText bg="puple.200" w="100px" variants={item} pt="30px" whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}>
                hello world
             </MotionText>
            <MotionBox
                bg="red.200"
                borderRadius="50%"


            />
        </Layout>
    )
}

export default About