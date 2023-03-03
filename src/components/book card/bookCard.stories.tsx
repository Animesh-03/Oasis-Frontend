import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCard from "./bookCard";



export default {
    title: "Components/BookCard",
    component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => <BookCard/>;

export const PrimarySolid = Template.bind({});