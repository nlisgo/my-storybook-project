import { Meta, StoryObj } from "@storybook/react";
import Food from "./Food";

export default {
  title: "Molecules/Food",
  component: Food,
} as Meta;

export const Default: StoryObj<typeof Food> = {
  args: {
    people: [
      {
        name: "Dave",
        surname: "Smith"
      },
      {
        name: "John",
        surname: "Doe"
      }
    ],

    burger: "I love burgers"
  },
};

export const Hotdogs: StoryObj<typeof Food> = {
  args: {
    people: [{
      "name": "Dave",
      "surname": "Smith"
    }, {
      "name": "John",
      "surname": "Doe"
    }],

    burger: "I love hotdogs"
  }
};
