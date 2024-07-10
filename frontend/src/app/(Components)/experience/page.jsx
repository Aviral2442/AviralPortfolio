'use client'
import React from 'react';
import { Container, Flex } from "@mantine/core"
import { Text, Avatar, Timeline } from "@mantine/core"
import classes from "./experience.module.css"

const Experience = () => {
    return (
        <Flex
            // mih={500}
            // bg="rgba(0, 0, 0, .3)"
            // gap="md"
            justify="center"
            align="center"
            // direction="row"
            // wrap="wrap"
            p={50}
            className={classes.container}
        >
            <Container fluid>
                <Timeline radius="sm" bulletSize={24}>


                    <Timeline.Item title="Present" className={classes.title} >
                        <br />
                    </Timeline.Item>


                    <Timeline.Item
                        title="MERN Stack Development Intern | Digipodium"
                        bullet={
                            <Avatar
                                size={28}
                                radius="xl"
                                src="digipodium.png"
                            />}
                        className={classes.title}>

                        <Text c="dimmed" size="sm">
                            JAN' 2024 - MAY '2024
                        </Text>
                        <Text c="dimmed" size="sm" w={650} >
                            Introducing Voice & Tour Navigator: a MERN Stack plugin system. Easily add voice commands to your
                            website and create guided tours in a few simple steps. Revolutionize user interaction and enhance
                            the visitor experience with ease.
                        </Text>
                    </Timeline.Item>


                    <Timeline.Item title="Web Developer | Glatt Pharma"
                        bullet={<Avatar
                            size={28}
                            radius="xl"
                            src="glatt.png"
                        />}>
                        <Text c="dimmed" size="sm">
                            Feb' 2024 - May' 2024
                        </Text>
                        <Text c="dimmed" size="sm" w={360}>
                            At Glatt Pharma, I was a web developer. I worked on numerous websites, gaining valuable experience,
                            particularly in client communication and integrating online payment and shipping methods for
                            e-commerce sites.
                        </Text>
                    </Timeline.Item>


                    <Timeline.Item title="SEO Intern | Glatt Pharma"
                        bullet={<Avatar
                            size={28}
                            radius="xl"
                            src="glatt.png"
                        />}>
                        <Text c="dimmed" size="sm">
                            Aug' 2023 - Nov' 2023
                        </Text>
                        <Text c="dimmed" size="sm" w={360}>
                            As an SEO Executive Intern at Glatt Pharma, I contributed to the company's online visibility and
                            digital marketing efforts. I gained hands-on experience in optimizing web content, conducting
                            keyword research, and improving search engine rankings. Skills Learn - ON/OFF-Page , Technical
                            SEO.
                        </Text>
                    </Timeline.Item>


                    <Timeline.Item title="WordPress Developer | DIGIPEXEL"
                        bullet={<Avatar
                            size={28}
                            radius="xl"
                            src="digipexel.png"
                        />}>
                        <Text c="dimmed" size="sm">
                            Oct' 2022 - June' 2023
                        </Text>
                        <Text c="dimmed" size="sm" w={360}>
                            During my time with the company, I was hardworking, creative, and honest. I was eager to learn
                            and implement new techniques, and I supported both my team and management. I worked on various
                            projects, learning a great deal along the way.
                        </Text>
                    </Timeline.Item>


                    <Timeline.Item title="Web Development Intern | TechnoHacks"
                        bullet={<Avatar
                            size={28}
                            radius="xl"
                            src="techno.png"
                        />}>
                        <Text c="dimmed" size="sm">
                            Sept' 2023
                        </Text>
                        <Text c="dimmed" size="sm" w={360}>
                            During my internship at TechnoHacks, I successfully completed three web development projects
                            using HTML5, CSS, and JavaScript. I acquired valuable programming skills and secured this
                            internship opportunity through LinkedIn.
                        <br />
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="End" className={classes.title} >
                    </Timeline.Item>


                </Timeline>
            </Container>
        </Flex>
    )
}

export default Experience