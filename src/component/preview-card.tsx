import AppLink from "@/component/app-link";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className: string;
  imageName: string;
  heading: string;
  description: string;
  learnMore: string;
};

const PreviewCard = ({
  className,
  imageName,
  heading,
  description,
  learnMore,
}: Props) => {
  return (
    <div className={className}>
      <Image
        src={`/asset/image/${imageName}.svg`}
        alt={imageName}
        width="64"
        height="40"
      />
      <h1>{heading}</h1>
      <p>{description}</p>
      <AppLink href="#">{learnMore}</AppLink>
    </div>
  );
};

export default memo(PreviewCard);
