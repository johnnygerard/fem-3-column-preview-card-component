import "server-only";
import { AVAILABLE_LOCALES } from "@/constant/i18n";
import { AppLocale } from "@/type/app-locale";
import { notFound } from "next/navigation";

// This object is structured specifically to allow the TypeScript system to
// properly infer the JSON data types.
const translations = {
  "en-US": () =>
    import("../../data/translation/en-US.json").then(
      (module) => module.default,
    ),
  "fr-FR": () =>
    import("../../data/translation/fr-FR.json").then(
      (module) => module.default,
    ),
};

export const getTranslation = async (locale: AppLocale) => {
  // This check is required for certain paths such as `/go/he.re`
  if (!AVAILABLE_LOCALES.includes(locale)) notFound();
  return translations[locale]();
};
