'use client'
import React from 'react'
import classes from './allSkills.module.css'
import { Avatar, Text, Group, Grid } from "@mantine/core"
import { IconPhoneCall, IconAt } from "@tabler/icons-react"

const FrontendSkills = () => {
    return (
        <div>
            <Grid>

                <Grid.Col span={4}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="reactjs.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Software engineer
                    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                React JS
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="nextjs.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Software engineer
                    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Next JS
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="reactBootstrap.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        Software engineer
                    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                React-Bootstrap
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
                </Grid.Col>

            </Grid>

            <Grid>

                <Grid.Col span={4}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="mantineui.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Mantine UI
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="TailwindCSS.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Tailwind CSS
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="vite.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                VITE
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
                </Grid.Col>

            </Grid>

            <Grid>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="HTML.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                HTML
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="CSS.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                CSS
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
                </Grid.Col>

                <Grid.Col span={4}>
                    <Group wrap="nowrap"  >
                        <Avatar
                            src="js.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Software engineer
    </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                JavaScript
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
                </Grid.Col>

            </Grid>
        </div>
    )
}

export default FrontendSkills