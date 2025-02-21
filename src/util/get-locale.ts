import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from "@/constant/i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

const getNegotiator = (request: NextRequest): Negotiator => {
  const headers: Negotiator.Headers = {};
  for (const [name, value] of request.headers) headers[name] = value;

  return new Negotiator({ headers });
};

/**
 * Get the user preferred language from the `Accept-Language` request header.
 * @param request - The incoming request object.
 * @returns The user preferred language as a BCP 47 language tag.
 * @see {@link https://github.com/tc39/proposal-intl-localematcher|Intl.LocaleMatcher proposal}
 * @see {@link https://formatjs.github.io/docs/polyfills/intl-localematcher/|Intl.LocaleMatcher ponyfill}
 * @see {@link https://github.com/jshttp/negotiator#accept-language-negotiation|Negotiator}
 */
export const getLocale = (request: NextRequest): string => {
  const requestedLocales = getNegotiator(request).languages();

  return match(requestedLocales, AVAILABLE_LOCALES, DEFAULT_LOCALE, {
    algorithm: "lookup",
  });
};
