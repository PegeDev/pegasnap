import Template from "./components/Template";
import { useRouter } from "next/router";
import {
  FaLink,
  FaPaste,
  FaEraser,
  FaDownload,
  FaHeart,
  FaShare,
  FaComment,
  FaPlay,
  FaMusic,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import i18n from "../i18n";
import { lazy, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import ReadMore from "./utils/ReadMore";
export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { locale } = router;
  const [paste, setPaste] = useState(false);
  const { t } = i18n;
  const onPaste = async () => {
    const cek = await navigator.clipboard.readText();
    await setUrl(cek);
    setPaste(true);
    if (paste) {
      setUrl("");
      setPaste(false);
    }
  };
  const handleChange = (e) => {
    setUrl(e);
    setPaste(true);
  };

  const handleUrl = (el) => {
    if (el === "" || el === null) {
      toast.error(t("url_not_found"));
    }
  };
  return (
    <Template title={"Home"}>
      <div className="flex flex-col justify-center items-center from-primary to-[#005e61] bg-gradient-to-br w-full py-[60px] sm:py-[100px] ">
        <div className="max-w-[90%]  space-y-6 ">
          <div className="flex flex-col space-y-[4px] w-full items-center justify-center ">
            <h1 className="capitalize  font-semibold text-[24px] sm:text-4xl text-center text-white">
              <strong> Download video TikTok No Watermark</strong>
            </h1>
            <p className="capitalize text-xs sm:text-lg text-center text-white">
              {t("desc")}
            </p>
          </div>
          <div className="flex bg-white overflow-hidden rounded-lg items-center">
            <span className=" px-4">
              <FaLink />
            </span>
            <input
              placeholder="https://www.tiktok.com/@example/"
              type="text"
              value={url}
              required
              onChange={(e) => handleChange(e.target.value)}
              className="focus:outline-none select-secondary rounded-[8px] text-center w-full p-[13px] sm:p-[13px] text-sm  text-secondary"
            />
            <button
              onClick={() => onPaste()}
              className="transition-all ease-linear duration-300 flex focus:ring-2 focus:ring-slate-300/50 items-center text-xs bg-slate-300 cursor-pointer select-none rounded-full p-3 sm:rounded-[8px] mx-2 text-secondary space-x-2 sm:p-2"
            >
              {!paste ? (
                <>
                  <FaPaste />
                  <span className="hidden sm:flex">Paste</span>
                </>
              ) : (
                <>
                  <FaEraser />
                  <span className="hidden sm:flex">Erase</span>
                </>
              )}
            </button>
            <button
              onClick={() => handleUrl(url)}
              className="hidden sm:flex  items-center text-xs bg-secondary cursor-pointer select-none rounded-[6px] mx-2 text-secondary space-x-2 p-2"
            >
              <span className="text-white font-semibold">
                <FaDownload />
              </span>
              <span className="text-white font-semibold uppercase">
                {t("download")}
              </span>
            </button>
          </div>

          <button
            onClick={() => handleUrl(url)}
            className="sm:hidden text-sm bg-secondary w-full flex items-center justify-center p-2 space-x-2 rounded-[8px] drop-shadow-xl focus:ring-2 focus:ring-secondary/60"
          >
            <span className="text-white font-semibold">
              <FaDownload />
            </span>
            <span className="text-white font-semibold uppercase">
              {t("download")}
            </span>
          </button>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto p-4 text-secondary space-y-4 ">
        <section className="w-full hidden">
          <div className="flex items-center justify-center bg-primary p-[8px] rounded-[8px]">
            <div className=" flex flex-col   bg-white p-[4px] overflow-hidden rounded-[8px]">
              <span className="relative sm:w-[400px]  w-[170px] rounded-[8px] overflow-hidden">
                <Image
                  priority
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/oADVJTQ0F1TBfynBBQbEetAPBII7jjVdDMdjwC~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1669064400&x-signature=m%2BgYwEapOkL7rEcH25mmF%2FrI6lM%3D"
                  alt={"test"}
                  width={500}
                  height={500}
                />
                <span className="transition ease-linear duration-300 absolute z-20 top-0 bottom-0 text-xl w-full h-full opacity-0 bg-black/30 hover:opacity-100 text-white">
                  <span className="absolute uppercase bottom-0 m-3 opacity-100 flex items-center text-sm sm:text-lg space-x-2">
                    <FaPlay />
                    <span className="font-semibold">19.9k</span>
                  </span>
                </span>
              </span>
              <div className="flex flex-row  justify-around pt-[12px]">
                <span className="flex flex-col items-center">
                  <span className="text-sm sm:text-xl">
                    <FaHeart />
                  </span>
                  <span className="text-sm sm:text-xl">19.9K</span>
                </span>
                <span className="flex flex-col items-center">
                  <span className="text-sm sm:text-xl">
                    <FaComment />
                  </span>
                  <span className="text-sm sm:text-xl">19.9K</span>
                </span>
                <span className="flex flex-col items-center">
                  <span className="text-sm sm:text-xl">
                    <FaShare />
                  </span>
                  <span className="text-sm sm:text-xl">19.9K</span>
                </span>
              </div>
            </div>
            <div className="flex-1  flex  items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full px-[6px] sm:px-10">
                <span className="max-w-[200px] w-[80px] bg-slate sm:w-[200px]  bg-white rounded-full overflow-hidden p-[4px]">
                  <Image
                    priority
                    className="rounded-full"
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/1feaebe5eb4ef034a637e7e333348a61~c5_100x100.jpeg?x-expires=1669219200&x-signature=1C2lSDQA4zkN11A8A%2B8APDZxw8Q%3D"
                    alt={"test"}
                    width={200}
                    height={200}
                  />{" "}
                </span>
                <span className="flex flex-col items-center justify-center w-full">
                  <span className="w-full text-white text-sm sm:text-xl text-center">
                    <strong>@Username</strong>
                  </span>
                  <span className="w-full text-white text-xs sm:text-sm text-center">
                    @Username
                  </span>
                  <span className="w-full text-white text-[10px] sm:text-sm  mt-4 text-center">
                    <span>
                      <ReadMore>cewek emang gitu bro #bblek</ReadMore>
                    </span>
                    <span className="flex items-center justify-center space-x-2">
                      <FaMusic />
                      <span>
                        <ReadMore>cewek emang git u bro #bblek</ReadMore>
                      </span>
                    </span>
                  </span>
                </span>
                <div className="flex flex-col w-full mt-2 text-[10px] space-y-2 items-center">
                  <button className="inline-flex items-center justify-center gap-2 uppercase p-2 w-full rounded-[8px] text-white bg-secondary">
                    <FaCloudDownloadAlt />
                    <span>DOWNLOAD NO Wm</span>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 uppercase p-2 w-full rounded-[8px] text-white bg-secondary">
                    <FaCloudDownloadAlt />
                    <span>DOWNLOAD W/ Wm</span>
                  </button>
                  <span className="flex flex-col items-center justify-center text-[10px] sm:w-[80%] text-white space-x-2  text-center">
                    <span>{t("mp3_answer")}</span>
                    <span className="font-semibold cursor-pointer hover:underline">
                      Download
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold leading-[20px] text-[20px]">
            {t("description.title")}
          </h2>
          <p className="text-[14px] sm:pl-4">{t("description.desc")}</p>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold text-[20px]">
            {t("features.title")}
          </h2>
          <ul className="list-outside pl-4 sm:pl-8 text-[14px] list-disc">
            <li>{t("features.desc.1")}</li>
            <li>{t("features.desc.2")}</li>
            <li>{t("features.desc.3")}</li>
            <li>{t("features.desc.4")}</li>
            <li>{t("features.desc.5")}</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold text-[20px]">
            {t("faq.1.title")}
          </h2>
          <ul className="list-outside pl-4 sm:pl-8 text-[14px] list-decimal">
            <li>{t("faq.1.desc.1")}</li>
            <li>{t("faq.2.desc.2")}</li>
            <li>{t("faq.1.desc.3")}</li>
            <li>{t("faq.1.desc.4")}</li>
            <li>{t("faq.1.desc.5")}</li>
            <li>{t("faq.1.desc.6")}</li>
            <li>{t("faq.1.desc.7")}</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold text-[20px]">
            {t("faq.2.title")}
          </h2>
          <ul className="list-outside pl-4 sm:pl-8 text-[14px] list-decimal">
            <li>{t("faq.2.desc.1")}</li>
            <li>{t("faq.2.desc.2")}</li>
            <li>{t("faq.2.desc.3")}</li>
            <li>{t("faq.2.desc.4")}</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold  text-[20px]">
            {t("faq.3.title")}
          </h2>
          <p className="text-[14px] sm:pl-4">{t("faq.3.desc")}</p>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold  text-[20px]">
            {t("faq.4.title")}
          </h2>
          <p className="text-[14px] sm:pl-4">{t("faq.4.desc")}</p>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold  text-[20px]">
            {t("faq.5.title")}
          </h2>
          <p className="text-[14px] sm:pl-4">{t("faq.5.desc")}</p>
        </section>
        <section className="space-y-2">
          <h2 className="capitalize font-semibold  text-[20px]">
            {t("faq.6.title")}
          </h2>
          <p className="text-[14px] sm:pl-4">{t("faq.6.desc")}</p>
        </section>
      </div>
    </Template>
  );
}
