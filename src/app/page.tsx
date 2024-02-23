import CardGrid from "@/components/CardGrid";
import ContentNav from "@/components/ContentNav/ContentNav";
import ErrorBanner from "@/components/ErrorBanner";
import Switchback from "@/components/Switchback";

export default function Home() {
  return (
    <main className="container wide">
      <ContentNav
        prevText="Jan 24, 2023"
        current="January 25, 2023"
        nextText="Jan 26, 2023"
      />
      <CardGrid
        heading={
          <h1>
            10 Most <br />
            <span>Popular</span> Models
          </h1>
        }
        cards={[
          {
            icon: "/models/mistral.webp",
            modelAuthor: "stabilityai",
            modelName: "japanese-stablelm-instruct-alpha-7b",
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
        ]}
      />
      <Switchback
        leftContent={
          <h2 className="heading">
            <span>45,515</span> text gen
            <br /> models existed
          </h2>
        }
        rightContent={
          <p>
            We like to say that in AI, a week is a month and a month is a year,
            and the "latest and greatest model" changes just as quickly. We
            tracked the most popular text-gen models starting in January 2023 to
            highlight the rapid rate of change in the AI industry. Click through
            time to see how quickly the state-of-the-art changes.
          </p>
        }
      />
    </main>
  );
}
