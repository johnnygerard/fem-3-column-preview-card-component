import "server-only";
import { AppLocale } from "@/type/app-locale";

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

export const getTranslation = async (locale: AppLocale) =>
  translations[locale]();
