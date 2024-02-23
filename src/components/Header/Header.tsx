import Image from "next/image";
import Select from "../Select";

const Header = () => {
  return (
    <header className="container dropdown">
      <div>
        <div className="left">
          <a href="/">⏳ LLM Time Capsule</a>
          <div className="by-octo">
            <a
              href="https://octo.ai/?utm_source=llmtimecapsule"
              target="_blank"
            >
              <span>by</span>
              <Image
                src="/icons/octo.svg"
                alt="OctoAI Icon"
                width="22"
                height="24"
              />
            </a>
          </div>
        </div>
        <div className="right">
          <Select
            label="Year"
            listItems={[
              { value: "2024", label: "2024" },
              { value: "2023", label: "2023" },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
