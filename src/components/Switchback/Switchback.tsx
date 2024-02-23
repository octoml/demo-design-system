import { FC, ReactElement } from "react";

interface SwitchbackProps {
  /** Content for switback left side (top on mobile) */
  leftContent: ReactElement;
  /** Content for switback right side (bottom on mobile) */
  rightContent: ReactElement;
}
const Switchback: FC<SwitchbackProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="switchback">
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  );
};

export default Switchback;
