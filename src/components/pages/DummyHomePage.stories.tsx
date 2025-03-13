import { Meta, StoryObj } from "@storybook/react";
import DummyHomePage from "./DummyHomePage";

export default {
  title: "Pages/DummyHomePage",
  component: DummyHomePage,
} as Meta<typeof DummyHomePage>;

export const Default: StoryObj<typeof DummyHomePage> = {};

export const Weather: StoryObj<typeof DummyHomePage> = {
  args: {
    weather: {
      temperature: 22.2,
      unit: "°C",
    },
  },
};
