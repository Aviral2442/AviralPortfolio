'use client'
import { Container, Flex, Grid, Paper, Text, ThemeIcon } from '@mantine/core'
import { IconColorSwatch } from '@tabler/icons-react'
import React from 'react'
import classes from './skills.module.css'
import FrontendSkills from './frontendSkills'
import BackendSkills from './backendSkills'
import Tools from './tools'
import Seo from './seo'
import Programing from './programing'
import Database from './database'

const Skills = () => {
    return (
        <>

            {/* FRONTEND */}
            <Grid p={100} >
                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Frontend Technologies
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            These skills involve designing and implementing the user interface and experience (UI/UX) of web
                            applications using various technologies and frameworks like React JS, Next JS, and CSS frameworks
                            such as Tailwind CSS. Proficiency in HTML, CSS, and JavaScript is crucial for frontend development.
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

                <Grid.Col span={9}>
                    <Container>
                        <FrontendSkills />
                    </Container>
                </Grid.Col>

            </Grid>

            {/* BACKEND */}
            <Grid p={100} >
                <Grid.Col span={9}>
                    <Container>
                        <BackendSkills />
                    </Container>
                </Grid.Col>

                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Backend Technologies
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            Backend skills focus on server-side development, handling business logic, database interactions,
                            and server management. Technologies like Express JS and Node JS are used to build robust backend
                            systems that support frontend applications.
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

            </Grid>

            {/* DATABASE */}
            <Grid p={100} >
                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Database Technologies
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            Database skills involve managing and interacting with databases to store and retrieve data
                            efficiently. MongoDB, as a NoSQL database, is particularly useful for handling large volumes of
                            unstructured data.
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

                <Grid.Col span={9}>
                    <Container>
                        <Database />
                    </Container>
                </Grid.Col>

            </Grid>

            {/* PROGRAMING LANG */}
            <Grid p={100} >

                <Grid.Col span={9}>
                    <Container>
                        <Programing />
                    </Container>
                </Grid.Col>

                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Programming Lang
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            Programming languages are foundational skills necessary for writing and understanding code. C and
                            Java are versatile languages used across different domains, from system programming (C) to
                            enterprise applications and Android development (Java).
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

            </Grid>

            {/* SEO */}
            {/* <Flex
                        mih={50}
                        bg="rgba(0, 0, 0, .3)"
                        gap="md"
                        justify="center"
                        align="center"
                        direction="row"
                        wrap="wrap"
                    > */}
            <Grid p={100} >
                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            SEO
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            SEO skills involve optimizing websites to improve their visibility and ranking in search engine
                            results pages (SERPs). This includes understanding keywords, creating quality content, optimizing
                            metadata, and using tools like Google Search Console to monitor and improve search engine
                            performance.
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

                <Grid.Col span={9}>
                        <Seo />
                </Grid.Col>

            </Grid>
            {/* </Flex> */}

            {/* TOOLS & PLATFORM */}
            <Grid p={100} >

                <Grid.Col span={9}>
                    <Container>
                        <Tools />
                    </Container>
                </Grid.Col>

                <Grid.Col span={3} >
                    {/* <Container> */}
                    <Paper withBorder radius="md" className={classes.card}>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="gradient"
                            gradient={{ deg: 0, from: "pink", to: "orange" }}
                        >
                            <IconColorSwatch
                                style={{ width: "28px", height: "28px" }}
                                stroke={1.5}
                            />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Tools and Platforms
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            These skills encompass familiarity with various tools and platforms that facilitate development,
                            collaboration, and website management. This includes build tools like Vite, content management
                            systems like WordPress, and analytics tools such as Google Analytics and Microsoft Clarity.
                        </Text>
                    </Paper>
                    {/* </Container> */}
                </Grid.Col>

            </Grid>
        </>
    )
}

export default Skills