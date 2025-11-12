import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import BackToTop from "@/src/components/BackToTop";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Extract metadata configuration for better maintainability
const SITE_METADATA = {
  title: "CV - HiNT",
  description: "This page is CV of HiNT",
  url: "https://hint.id.vn/",
  thumbnail: "/thumbnail_logo.png",
  googleVerification: "",
};

// Use a separate function to generate metadata for better readability
const generateMetaTags = (metadata: typeof SITE_METADATA) => (
  <>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1,maximum-scale=1 "
    />
    <link rel="icon" href="/src/app/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
      rel="stylesheet"
    />
    {/* Open Graph / Social Media Meta Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.thumbnail} />

    {/* Zalo Meta Tags */}
    <meta property="zalo:site_name" content="HiNT" />
    <meta property="zalo:description" content={metadata.description} />
    <meta property="zalo:image" content={metadata.thumbnail} />

    {/* Google Search Console Verification */}
    <meta
      name="google-site-verification"
      content={metadata.googleVerification}
    />
  </>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>{generateMetaTags(SITE_METADATA)}</head>
      <body className="bg-(--background)">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
