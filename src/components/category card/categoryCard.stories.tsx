import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryCard from "./categoryCard";



export default {
    title: "Components/CategoryCard",
    component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = (args) => <CategoryCard {...args}/>;

export const Primary = Template.bind({});

Primary.args= {
    name: ""
}

