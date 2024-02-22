import type { Meta, StoryObj } from "@storybook/react";

import ModelCard from ".";

const meta: Meta<typeof ModelCard> = {
  title: "Components/Model Card",
  component: ModelCard,
  decorators: [
    (Story) => (
      <main className="container">
        <Story />
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ModelCard>;

export const Default: Story = {
  args: {
    icon: "/models/mistral.webp",
    modelAuthor: "mistralai",
    modelName: "Mistral-7B-v0.1",
    externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
  },
};
