import { useRouter } from "next/router";
import { Poppins } from "@next/font/google";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import i18n from "../i18n";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  variable: "--font-Poppins",
  display: "swap",
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.locale) {
    i18n.changeLanguage(router.locale);
  }
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
