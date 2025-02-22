import { AppLocale } from "@/type/app-locale";
import { getTranslation } from "@/util/get-translation";
import Link from "next/link";
import { memo } from "react";

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const text = (await getTranslation(locale)).notFound;

  return (
    <div className="text-center">
      <h1>{text.heading}</h1>
      <p>{text.description}</p>
      <Link href={`/${locale}`}>{text.link}</Link>
    </div>
  );
};

export default memo(Page);
