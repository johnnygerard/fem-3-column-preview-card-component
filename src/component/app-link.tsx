"use client";
import AppFocusRing from "@/component/app-focus-ring";
import { memo } from "react";
import { Link, LinkProps } from "react-aria-components";

const AppLink = (props: LinkProps) => (
  <AppFocusRing>
    <Link {...props} />
  </AppFocusRing>
);

export default memo(AppLink);
