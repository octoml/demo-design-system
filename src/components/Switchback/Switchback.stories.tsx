import type { Meta, StoryObj } from "@storybook/react";

import Switchback from ".";

const meta: Meta<typeof Switchback> = {
  title: "Components/Switchback",
  component: Switchback,
  decorators: [
    (Story) => (
      <main className="container">
        <Story />
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Switchback>;

export const Default: Story = {
  args: {
    leftContent: (
      <h2 className="heading">
        <span>1000</span> text gen models existed
      </h2>
    ),
    rightContent: (
      <p>
        At OctoAI, we are always thinking about how we can stay ahead of the
        curve. We like to say that in AI, a week is a month and a month is a
        year, and the "latest and greatest model" changes just as quickly. We
        decided to track the most popular text-gen models from 2023 to today, to
        highlight the rapid rate of change in the AI industry. Results were
        collected from HuggingFace's "trending" list of text-gen models. From
        early research models to fine-tuned LLMs running in production apps
        today, we invite you to click through time to see how quickly the
        state-of-the-art changes.
      </p>
    ),
  },
};
