import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import i18n from "../../i18n";
export default function Template({ children, title }) {
  const { locale } = useRouter();
  const { t } = i18n;
  const [time, setTime] = useState("");
  useEffect(() => {
    const time = new Date();
    setTime(time.getFullYear());
  }, []);
  return (
    <div>
      <Head>
        <title>{t("meta.title", { years: time })}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
        />
        <meta itemprop="name" content={t("meta.title", { years: time })} />
        <meta name="description" content={t("meta.description")} />
        <meta
          property="keyword"
          content="download video tiktok, download tiktok tanpa watermark, unduh video tiktok tanpa watermark, download video tiktok tanpa watermark 2021, unduhan tiktok, video tiktok tanpa watermark, download video tiktok tanpa watermark online, cara download video tiktok tanpa watermark, pengunduh video tiktok, save video tiktok tanpa watermark iphone"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t("meta.title", { years: time })} />
        <meta name="twitter:description" content={t("meta.description")} />
        <meta
          name="twitter:keyword"
          content="download video tiktok, download tiktok tanpa watermark, unduh video tiktok tanpa watermark, download video tiktok tanpa watermark 2021, unduhan tiktok, video tiktok tanpa watermark, download video tiktok tanpa watermark online, cara download video tiktok tanpa watermark, pengunduh video tiktok, save video tiktok tanpa watermark iphone"
        />
        <meta property="og:title" content={t("meta.title", { years: time })} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:site_name" content="PegaSnap.xyz" />
        <meta
          property="og:keyword"
          content="download video tiktok, download tiktok tanpa watermark, unduh video tiktok tanpa watermark, download video tiktok tanpa watermark 2021, unduhan tiktok, video tiktok tanpa watermark, download video tiktok tanpa watermark online, cara download video tiktok tanpa watermark, pengunduh video tiktok, save video tiktok tanpa watermark iphone"
        />
        <meta property="og:locale" content={locale} />
        <meta name="google" content="notranslate" />
        <meta property="og:url" content={`https://pegasnap.xyz/${locale}`} />
        <link rel="canonical" href={`https://pegasnap.xyz/${locale}`} />
        <link rel="alternate" href="https://pegasnap.xyz/en" hreflang="en" />
        <link rel="alternate" href="https://pegasnap.xyz/fr" hreflang="fr" />
        <link rel="alternate" href="https://pegasnap.xyz/de" hreflang="de" />
        <link rel="alternate" href="https://pegasnap.xyz/es" hreflang="es" />
        <link rel="alternate" href="https://pegasnap.xyz/zh" hreflang="zh" />
        <link rel="alternate" href="https://pegasnap.xyz/it" hreflang="it" />
        <link rel="alternate" href="https://pegasnap.xyz/id" hreflang="id" />
        <link rel="alternate" href="https://pegasnap.xyz/ar" hreflang="ar" />
        <link rel="alternate" href="https://pegasnap.xyz/uk" hreflang="uk" />
        <link rel="alternate" href="https://pegasnap.xyz/tr" hreflang="tr" />
        <link rel="alternate" href="https://pegasnap.xyz/ru" hreflang="ru" />
        <link
          rel="alternate"
          href="https://pegasnap.xyz/nl-NL"
          hreflang="nl-NL"
        />
      </Head>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen pt-[70px] select-none">{children}</div>
      <Footer />
    </div>
  );
}
