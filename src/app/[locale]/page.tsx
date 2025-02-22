import PreviewCard from "@/component/preview-card";
import { AppLocale } from "@/type/app-locale";
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
    <ul>
      {text.vehicles.map((vehicle, index) => (
        <li key={vehicle.type}>
          <PreviewCard
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
