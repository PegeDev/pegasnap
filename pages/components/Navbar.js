import React from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const langArr = [
    { title: "🇺🇸 English", value: "en" },
    { title: "🇫🇷 Français", value: "fr" },
    { title: "🇩🇪 Deutsh", value: "de" },
    { title: "🇪🇸 Español", value: "es" },
    { title: "🇻🇳 Tiếng Việt", value: "vi" },
    { title: "🇮🇹 Italiano", value: "it" },
    { title: "🇮🇩 Indonesia", value: "id" },
    { title: "🇦🇪 العربية", value: "ar" },
    { title: "🇺🇦 Ukrainian", value: "uk" },
    { title: "🇹🇷 Türkçe", value: "tr" },
    { title: "🇷🇺 Русский", value: "ru" },
    { title: "🇳🇱 Nederlands", value: "nl-NL" },
  ];
  return (
    <nav className="w-full bg-white border-b-2 fixed z-50">
      <div className="container mx-auto px-4 max-w-[1000px] py-4 flex justify-between items-center">
        <div className="flex text-2xl">
          <span className="font-bold text-primary">Pega</span>
          <span className="text-secondary font-semibold">Snap</span>
        </div>
        <div className="flex">
          <div className="dropdown dropdown-bottom cursor-pointer select-none dropdown-end w-full">
            <label
              tabIndex={0}
              className="hidden cursor-pointer  sm:flex items-center space-x-2 p-2"
            >
              <span className="text-secondary  text-sm">Language</span>
              <span className="text-secondary text-xs">
                <FaChevronDown />
              </span>
            </label>
            <label
              tabIndex={0}
              className="focus:ring-2 focus:ring-primary/60 focus:bg-primary  focus:text-white text-secondary transition duration-300 ease-linear sm:hidden flex items-center space-x-2 p-2 bg-slate-200 rounded-full"
            >
              <span className=" text-xl">
                <FaGlobe />
              </span>
            </label>
            <ul className="dropdown-content menu  border-2 mt-2 w-48 rounded-[8px] space-y-2 drop-shadow-2xl px-2 py-1 bg-white">
              {langArr.map((el, i) => (
                <li key={i} className="text-secondary">
                  <Link
                    className="min-h-full"
                    href={router.asPath + el.value}
                    locale={el.value}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
