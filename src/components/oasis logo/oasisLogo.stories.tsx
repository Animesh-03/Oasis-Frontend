import { ComponentMeta, ComponentStory } from "@storybook/react";
import OasisLogo from "./oasisLogo";

export default OasisLogo as ComponentMeta<typeof OasisLogo>;

const Template: ComponentStory<typeof OasisLogo> = (args) => <OasisLogo {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    size: "large",
    weight: "bold"
}
