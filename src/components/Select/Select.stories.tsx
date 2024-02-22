import type { Meta, StoryObj } from "@storybook/react";

import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Year",
    listItems: [
      {
        value: "2024",
        label: "2024",
      },
      {
        value: "2023",
        label: "2023",
      },
    ],
  },
};
