import { memo } from "react";
import { FocusRing, FocusRingProps } from "react-aria";

const AppFocusRing = (props: FocusRingProps) => {
  return (
    <FocusRing
      focusRingClass="animate-focus-ring outline-2 outline-offset-2 outline-blue-500"
      {...props}
    />
  );
};

export default memo(AppFocusRing);
