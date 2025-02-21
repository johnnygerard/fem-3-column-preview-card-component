import { AVAILABLE_LOCALES } from "@/constant/i18n";
import { AppLocale } from "@/type/app-locale";
import { getTranslation } from "@/util/get-translation";
import Link from "next/link";
import { memo } from "react";

export const generateStaticParams = async () =>
  AVAILABLE_LOCALES.map((locale) => ({ lang: locale }));

type Props = {
  params: Promise<{ lang: AppLocale }>;
};

const Page = async ({ params }: Props) => {
  const { lang } = await params;
  const text = (await getTranslation(lang)).notFound;

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1>{text.heading}</h1>
        <p>{text.description}</p>
        <Link href={`/${lang}`}>{text.link}</Link>
      </div>
    </div>
  );
};

export default memo(Page);
