'use client'
import React from 'react'
import classes from './allSkills.module.css'
import { Avatar, Text, Group, Grid } from "@mantine/core"
import { IconPhoneCall, IconAt } from "@tabler/icons-react"

const Tools = () => {
    return (
        <div>
            <Grid>

                <Grid.Col span={4}>
                    <Group wrap="nowrap" m={5} >
                        <Avatar
                            src="wordpress.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                WordPress
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
                            src="console.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Google Search Console
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
                            src="analytics.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Software engineer
            </Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                            Google Analytics
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
                            src="clarity.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
Software engineer
</Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                            Microsoft Clarity

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
                            src="tagmanager.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
Software engineer
</Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                            Tag Manager
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
                            src="github.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
Software engineer
</Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                            GitHub
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
                            src="figma.png"
                            size={94}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
Software engineer
</Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Figma
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
                            src="canva.png"
                            size={80}
                            radius="md"
                        />
                        <div>
                            {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
Software engineer
</Text> */}

                            <Text fz="lg" fw={500} className={classes.name}>
                                Canva
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

export default Tools