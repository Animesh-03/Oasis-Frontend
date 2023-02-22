import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./input";



export default Input as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args ={
    placeholder:"test"
};
