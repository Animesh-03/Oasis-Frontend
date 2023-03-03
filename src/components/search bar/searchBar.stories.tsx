
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./searchBar";


export default SearchBar as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});

Primary.args ={
    placeholder:"test"
};
