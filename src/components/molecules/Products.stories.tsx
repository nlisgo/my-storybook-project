import { Meta, StoryObj } from "@storybook/react";
import Products from "./Products";

export default {
  title: "Molecules/Products",
  component: Products,
} as Meta;

export const Default: StoryObj<typeof Products> = {
  args: {
    products: [
      {
        id: 1,
        title: "Dave",
        price: "£2.99"
      },
      {
        id: 2,
        title: "John",
        price: "£2.99"
      }
    ]
  },
};

