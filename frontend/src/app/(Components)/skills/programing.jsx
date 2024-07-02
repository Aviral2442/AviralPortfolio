'use client'
import React from 'react'
import classes from './allSkills.module.css'
import { Avatar, Grid, Group, Text } from '@mantine/core'

const Programing = () => {
    return (
        <div>
            <Grid>

                <Grid.Col span={6}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="c.png"
                            size={80}
                            radius="md"
                        />
                        <div>

                            <Text fz="lg" fw={500} className={classes.name}>
                                C Languages
                            </Text>

                            <Group wrap="nowrap" gap={10} mt={3}>
                                <Text fz="xs" c="dimmed">
                                    A JavaScript library for building user interfaces, commonly used for creating single-page applications.
                                </Text>
                            </Group>

                        </div>
                    </Group>
                </Grid.Col>

                <Grid.Col span={6}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="java.png"
                            size={80}
                            radius="md"
                        />
                        <div>

                            <Text fz="lg" fw={500} className={classes.name}>
                                Java
                            </Text>

                            <Group wrap="nowrap" gap={10} mt={3}>
                                <Text fz="xs" c="dimmed">
                                    A JavaScript library for building user interfaces, commonly used for creating single-page applications.
                                </Text>
                            </Group>
                        </div>
                    </Group>
                </Grid.Col>

            </Grid>
        </div>
    )
}

export default Programing