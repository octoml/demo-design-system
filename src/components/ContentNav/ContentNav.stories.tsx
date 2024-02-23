import type { Meta, StoryObj } from "@storybook/react";

import ContentNav from ".";

const meta: Meta<typeof ContentNav> = {
  title: "Components/Content Nav",
  component: ContentNav,
  decorators: [
    (Story) => (
      <main className="container">
        <Story />
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ContentNav>;

export const Default: Story = {
  args: {
    prevText: "Jan 24, 2023",
    current: "January 25, 2023",
    nextText: "Jan 26, 2023",
  },
};
