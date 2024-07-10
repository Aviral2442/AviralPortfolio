'use client'
import React from 'react'
import classes from './hero.module.css'
import { Avatar, BackgroundImage, Grid, Title } from '@mantine/core'

const Hero = () => {
    return (
        <div
            className={classes.container}
        >
            <div>
                <Grid p={10} >
                    <Grid.Col bg="red" span={{ base: 12, md: 6, lg: 6 }}>
                        <Title order={1} >Hi, I'm Aviral</Title>
                        <Title order={1} >Srivastava</Title>
                        <Title order={1} >Web Developer </Title>
                    </Grid.Col>
                    <Grid.Col bg="blue" span={{ base: 12, md: 6, lg: 6 }} className={classes.rightSide} >
                        <BackgroundImage
                            // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                            radius="xl"
                        >
                            <Avatar src='aviral.png' color="cyan" radius="xxl" size="300" />
                        </BackgroundImage>
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    )
}

export default Hero