'use client'
import { Avatar, Grid, Group, Text } from '@mantine/core'
import React from 'react'
import { IconColorSwatch } from '@tabler/icons-react'
import classes from './allSkills.module.css'

const Seo = () => {
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
                        {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}
            <Avatar
                        p={5}
                        src="seo.png"
                        size={80}
                        radius="md"
                    />

                        <Text fz="xl" fw={500} className={classes.name}>
                            Search Engine Optimization
                        </Text>

                        <Group wrap="nowrap" gap={10} mt={3}>
                            {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
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

                        {/* <Group wrap="nowrap" gap={10} mt={5}>
                <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                <Text fz="xs" c="dimmed">
                    +11 (876) 890 56 23
                </Text>
            </Group> */}
                    </div>
                </Group>
            </Grid.Col>
        </Grid>
    )
}

export default Seo