import { AVAILABLE_LOCALES } from "@/constant/i18n";
import { AppLocale } from "@/type/app-locale";
import { getTranslation } from "@/util/get-translation";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google";
import "../globals.css";
import { memo, ReactNode } from "react";

const bigShouldersDisplay = Big_Shoulders_Display({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-big-shoulders-display",
});

const lexendDeca = Lexend_Deca({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

// To keep things simple, the Open Graph image is not localized.
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const { metadata } = await getTranslation(locale);

  return {
    metadataBase: new URL("https://example.com/placeholder"),
    title: {
      template: `%s | ${metadata.app.name}`,
      default: metadata.app.name,
    },
    description: metadata.app.description,
    icons: [
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/asset/image/favicon.png",
      },
    ],
    openGraph: {
      type: "website",
      url: "/",
      siteName: metadata.app.name,
      title: metadata.app.name,
      description: metadata.app.description,
    },
  };
};

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

export const generateStaticParams = async () =>
  AVAILABLE_LOCALES.map((locale) => ({ locale }));

type Props = {
  children: ReactNode;
  params: Promise<{ locale: AppLocale }>;
};

const RootLayout = async ({ children, params }: Props) => {
  const { locale } = await params;

  return (
    <html
      className={clsx(
        bigShouldersDisplay.variable,
        lexendDeca.variable,
        "font-sans antialiased",
      )}
      lang={locale}
    >
      <body className="bg-[#F2F2F2]">
        <main className="grid min-h-screen min-w-min place-items-center px-6 py-22">
          {children}
        </main>
        <noscript>
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              top: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "#fff4f4",
              color: "#d32f2f",
              borderBottom: "2px solid currentColor",
              textAlign: "center",
              lineHeight: 1.5,
            }}
            role="alert"
          >
            <p>
              JavaScript is required for this website to function properly.
              Please ensure that it is supported and enabled in your browser
              settings.
              <br />
              To learn more, check out{" "}
              <a
                style={{ textDecorationLine: "underline", color: "LinkText" }}
                href="https://enable-javascript.com/"
              >
                How to enable JavaScript in your browser
              </a>
              .
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
};

export default memo(RootLayout);
