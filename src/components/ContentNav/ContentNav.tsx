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
      <div className="nav-item prev">
        <a href="">
          {Chevron}
          <span>{prevText}</span>
        </a>
      </div>
      {current && <div className="current middle">{current}</div>}
      <div className="nav-item next">
        <a href="">
          <span>{nextText}</span>
          {Chevron}
        </a>
      </div>
      {current && <div className="current bottom">{current}</div>}
    </div>
  );
};

export default ContentNav;
