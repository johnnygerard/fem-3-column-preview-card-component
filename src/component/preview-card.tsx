import AppLink from "@/component/app-link";
import Image from "next/image";
import { memo } from "react";

type Props = {
  imageName: string;
  heading: string;
  description: string;
  learnMore: {
    href: string;
    label: string;
  };
};

const PreviewCard = ({ imageName, heading, description, learnMore }: Props) => {
  return (
    <div>
      <Image
        src={`/image/${imageName}.svg`}
        alt={imageName}
        width="64"
        height="40"
      />
      <h1>{heading}</h1>
      <p>{description}</p>
      <AppLink href={learnMore.href}>{learnMore.label}</AppLink>
    </div>
  );
};

export default memo(PreviewCard);
