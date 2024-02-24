const Footer = () => {
  return (
    <footer>
      <div className="container m-auto">
        <p className="credit">
          Data sourced from{" "}
          <a href="https://huggingface.co/" target="_blank">
            HuggingFace
          </a>
        </p>
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
