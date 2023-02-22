import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from "./icon-button";
import {AiOutlineGoogle} from 'react-icons/ai'


export default IconButton as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args ={
    ICO:AiOutlineGoogle,
    href:"/login"
};
