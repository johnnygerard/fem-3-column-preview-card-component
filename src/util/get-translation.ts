import "server-only";
import { AppLocale } from "@/type/app-locale";

export const getTranslation = async (locale: AppLocale) => {
  // This code is structured specifically to allow the TypeScript system to
  // properly infer the JSON data types.
  switch (locale) {
    case "en-US":
      return import("../../data/translation/en-US.json").then(
        (module) => module.default,
      );
    case "fr-FR":
      return import("../../data/translation/fr-FR.json").then(
        (module) => module.default,
      );
    default:
      return import("../../data/translation/en-US.json").then(
        (module) => module.default,
      );
  }
};
