import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container m-auto">
        <nav>
          <ul>
            <li>
              <a
                href="https://octo.ai/?utm_source=llmtimecapsule"
                target="_blank"
              >
                Powered by OctoAI
              </a>
            </li>
            <li className="only-icons">
              <a
                href="https://www.youtube.com/channel/UCbUrHpUyw2q5s-oe6t8ljnA"
                target="_blank"
              >
                <Image
                  src="/icons/youtube.svg"
                  alt="Youtube Icon"
                  width="22"
                  height="22"
                />
              </a>
              <a href="https://twitter.com/octoml" target="_blank">
                <Image src="/icons/x.svg" alt="X Icon" width="22" height="22" />
              </a>
              <a
                href="https://www.linkedin.com/company/octoaicloud"
                target="_blank"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn Icon"
                  width="22"
                  height="22"
                />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              Data sourced from{" "}
              <a href="https://huggingface.co/" target="_blank">
                HuggingFace
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/privacy-policy/?utm_source=llmtimecapsule"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://octo.ai/legals/terms-of-use/?utm_source=llmtimecapsule"
                target="_blank"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
