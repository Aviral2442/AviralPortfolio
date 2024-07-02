'use client'
import { Avatar, Grid, Group, Text } from '@mantine/core'
import React from 'react'
import classes from './allSkills.module.css'

const Database = () => {
    return (
        <Grid>

            <Grid.Col span={8}>
                <Group wrap="nowrap" m={5} >
                    {/* <Avatar
                        src="seo.png"
                        size={80}
                        radius="md"
                    /> */}
                    <div>
                        <Avatar
                            p={5}
                            src="mongodb.png"
                            size={80}
                            radius="md"
                        />

                        <Text fz="xl" fw={500} className={classes.name}>
                            Mongo DB
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={3}>
                            <Text fz="xs" c="dimmed">
                                Search Engine Optimization (SEO) is the practice of optimizing websites to rank higher in
                                search engine results pages (SERPs). This involves a variety of techniques and strategies
                                designed to increase the quantity and quality of organic traffic to a site. SEO encompasses
                                on-page elements like keyword optimization, content creation, and meta tags, as well as
                                off-page elements like backlinks and social signals. Effective SEO improves a site's
                                visibility, making it easier for potential visitors to find it through search engines like
                                Google. It also involves technical aspects such as improving site speed, mobile-friendliness,
                                and ensuring proper indexing by search engines.
                            </Text>
                        </Group>
                    </div>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Database