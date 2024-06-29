'use client'
import React from 'react'
import { Container, Group, ActionIcon, rem, Text } from "@mantine/core"
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandSnapchat,
    IconBrandTelegram
} from "@tabler/icons-react"
import classes from "./footer.module.css"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {/* <MantineLogo size={28} /> */}
                <Text size="sm" c="gray" className={classes.text}>
                    © 2024 Aviral Srivastava. All rights reserved.
                </Text>
                <Group
                    gap={0}
                    className={classes.links}
                    justify="flex-end"
                    wrap="nowrap"
                >
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandFacebook
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandLinkedin
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandGithub
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandSnapchat
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTelegram
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    )
}

export default Footer