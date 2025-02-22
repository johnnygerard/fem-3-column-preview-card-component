import AppLink from "@/component/app-link";
import { cn } from "@/util/cn";
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
    <div className={cn(className, "flex flex-col p-12")}>
      <Image
        className="h-10 w-16"
        src={`/asset/image/${imageName}.svg`}
        alt={imageName}
        width="64"
        height="40"
      />
      <h1
        className={cn(
          "font-display leading-[normal] font-bold uppercase",
          "mt-9 text-[2.5rem] text-[#F2F2F2]",
        )}
      >
        {heading}
      </h1>
      <p className="my-6 text-[0.9375rem]/[1.66] text-white/75">
        {description}
      </p>
      <AppLink
        className="flex h-12 items-center self-start rounded-full bg-[#F2F2F2] px-8"
        href="#"
      >
        {learnMore}
      </AppLink>
    </div>
  );
};

export default memo(PreviewCard);
