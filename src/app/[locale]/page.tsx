import PreviewCard from "@/component/preview-card";
import { AppLocale } from "@/type/app-locale";
import { cn } from "@/util/cn";
import { getTranslation } from "@/util/get-translation";
import { memo } from "react";

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const text = await getTranslation(locale);
  const imageNames = ["sedan", "suv", "luxury"];

  return (
    <ul className="max-w-82">
      {text.vehicles.map((vehicle, index) => (
        <li key={vehicle.type}>
          <PreviewCard
            className={cn(
              [
                "bg-[#E28625] text-[#E28625]",
                "bg-[#006971] text-[#006971]",
                "bg-[#004140] text-[#004140]",
              ][index],
              index === 0 && "rounded-t-lg",
              index === 2 && "rounded-b-lg",
            )}
            imageName={imageNames[index]}
            heading={vehicle.type}
            description={vehicle.description}
            learnMore={text.learnMore}
          />
        </li>
      ))}
    </ul>
  );
};

export default memo(Page);
