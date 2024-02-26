import { FC, ReactElement } from "react";

interface SwitchbackProps {
  /** Optional eyebrow */
  eyebrow?: string;
  /** Content for switback left side (top on mobile) */
  leftContent: ReactElement;
  /** Content for switback right side (bottom on mobile) */
  rightContent: ReactElement;
}
const Switchback: FC<SwitchbackProps> = ({
  eyebrow,
  leftContent,
  rightContent,
}) => {
  return (
    <div className="switchback">
      <div className="switchback-container">
        <div>
          {eyebrow && (
            <div className="eyebrow">
              <span>{eyebrow}</span>
            </div>
          )}
          {leftContent}
        </div>
        <div>{rightContent}</div>
      </div>
    </div>
  );
};

export default Switchback;
