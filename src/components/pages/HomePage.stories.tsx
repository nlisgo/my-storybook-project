import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
} as Meta<typeof HomePage>;

export const Default: StoryObj<typeof HomePage> = {};

export const Weather: StoryObj<typeof HomePage> = {
  args: {
    weather: {
      temperature: 22.2,
      unit: "°C",
    },
  },
};
