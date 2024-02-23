import Image from "next/image";
import { FC } from "react";

interface ContentNavProps {
  /** Text for previous button */
  prevText?: string;
  /** Text for next button */
  nextText?: string;
  /** Text for current content */
  current?: string;
}

const ContentNav: FC<ContentNavProps> = ({
  prevText = "Previous",
  nextText = "Next",
  current,
}) => {
  const Chevron = (
    <Image src="/icons/chevron.svg" width="12" height="12" alt="" />
  );
  return (
    <div className="content-nav">
      <button>
        {Chevron}
        {prevText}
      </button>
      {current && <div className="current middle">{current}</div>}
      <button>
        {nextText}
        {Chevron}
      </button>
      {current && <div className="current bottom">{current}</div>}
    </div>
  );
};

export default ContentNav;
