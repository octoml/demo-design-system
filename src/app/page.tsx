import CardGrid from "@/components/CardGrid";
import ContentNav from "@/components/ContentNav/ContentNav";
import ErrorBanner from "@/components/ErrorBanner";
import Switchback from "@/components/Switchback";

export default function Home() {
  return (
    <main className="container not-found">
      <h1 className="heading">
        Page <span>not found</span>
      </h1>
      <a href="/" className="button">
        Go back home!
      </a>
    </main>
  );
}
