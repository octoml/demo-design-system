import type { Meta, StoryObj } from "@storybook/react";

import CardGrid from ".";

const meta: Meta<typeof CardGrid> = {
  title: "Components/Card Grid",
  component: CardGrid,
  decorators: [
    (Story) => (
      <main className="container">
        <Story />
      </main>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardGrid>;

export const Default: Story = {
  args: {
    heading: (
      <h1>
        10 Most <span>Popular</span>Models
      </h1>
    ),
    cards: [
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
      {
        icon: "/models/mistral.webp",
        modelAuthor: "mistralai",
        modelName: "Mistral-7B-v0.1",
        externalLink: "https://huggingface.co/mistralai/Mistral-7B-v0.1",
      },
    ],
  },
};
