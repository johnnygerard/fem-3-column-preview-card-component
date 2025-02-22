import AppLink from "@/component/app-link";
import { AppLocale } from "@/type/app-locale";
import { cn } from "@/util/cn";
import { getTranslation } from "@/util/get-translation";
import { memo } from "react";

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const text = (await getTranslation(locale)).notFound;

  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-[#0A0A0A] p-8 text-center">
      <h1 className="mb-4 font-display text-[3rem] text-[#F2F2F2] uppercase">
        {text.heading}
      </h1>
      <p className="mb-8 text-lg text-white/75">{text.description}</p>
      <AppLink
        href={`/${locale}`}
        className={cn(
          "whitespace-nowrap hover:border-white hover:bg-transparent hover:text-white",
          "flex h-12 items-center rounded-full border-2 bg-[#F2F2F2] px-8 transition-colors",
        )}
      >
        {text.link}
      </AppLink>
    </div>
  );
};

export default memo(Page);
