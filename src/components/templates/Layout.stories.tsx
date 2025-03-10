import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Templates/Layout",
  component: Layout,
} as Meta;

export const Default: StoryObj<typeof Layout> = {
  args: {
    children: <p>Some content</p>,
  },
};
