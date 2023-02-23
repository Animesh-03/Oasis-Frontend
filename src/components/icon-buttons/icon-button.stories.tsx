import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./icon-button";
import {AiOutlineGoogle} from 'react-icons/ai'


export default {
    title: "Components/Icon Button",
    component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const GoogleButton = Template.bind({});

GoogleButton.args ={
    Icon: AiOutlineGoogle,
    size: 20,
};
