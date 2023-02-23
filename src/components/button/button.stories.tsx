import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";



export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimarySolid = Template.bind({});

PrimarySolid.args ={
    label: "Button",
    variant: "primary"
};

export const PrimaryOutlined = Template.bind({});

PrimaryOutlined.args ={
    label: "Button",
    variant: "primary",
    outlined: true
};