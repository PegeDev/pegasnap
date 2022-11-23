/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "id",
    locales: [
      "en",
      "fr",
      "de",
      "es",
      "nl-NL",
      "it",
      "id",
      "ar",
      "uk",
      "tr",
      "ru",
      "vi",
    ],
  },
  images: {
    domains: ["p16-sign-va.tiktokcdn.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
