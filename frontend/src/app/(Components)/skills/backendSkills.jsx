'use client'
import React from 'react'
import { Avatar, Container, Grid, Group, Paper, Text, ThemeIcon } from '@mantine/core'
import { IconColorSwatch } from '@tabler/icons-react'
import classes from './allSkills.module.css'

const BackendSkills = () => {
    return (
        <div>
            <Grid>

                {/* <Grid.Col span={6}> */}
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="expressjs.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Express JS
                            </Text>

                            <Group wrap="nowrap" gap={10} mt={3}>
                                {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
                                <Text fz="xs" c="dimmed">
                                    A JavaScript library for building user interfaces, commonly used for creating single-page applications.
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
                {/* </Grid.Col> */}

                {/* <Grid.Col span={6}> */}
                    <Group wrap="nowrap" mt={5} m="5">
                        <Avatar
                            src="nodejs.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                            Node JS
                            </Text>

                            <Group wrap="nowrap" gap={10} mt={3}>
                                {/* <IconAt stroke={1.5} size="1rem" className={classes.icon} /> */}
                                <Text fz="xs" c="dimmed">
                                    A JavaScript library for building user interfaces, commonly used for creating single-page applications.
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
                {/* </Grid.Col> */}

            </Grid>
        </div>
    )
}

export default BackendSkills