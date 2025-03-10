import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Click Me",
    onClick: () => {
      const eventDetails = { time: new Date().toISOString() };
      action("button-clicked")(eventDetails);
      alert(`Button clicked at: ${eventDetails.time}`);
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the button by text
    const button = await canvas.getByRole("button", { name: "Click Me" });

    // Simulate a user click
    await userEvent.click(button);
  },
};
