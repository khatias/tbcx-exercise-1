import bgimage from "../../../assets/fileAsset.jpg";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
function HeroSection() {
  const t = useTranslations("HeroSection");

  const backgroundImageStyle = {
    backgroundImage: `url(${bgimage.src})`,
  };

  return (
    <div className="h-[400px] lg:h-[750px]">
      <div
        style={backgroundImageStyle}
        className=" bg-left lg:bg-center  h-full  flex flex-col md:flex-row items-center justify-between md:pt-16   bg-gradient-to-br from-blue-100 to-purple-300 dark:from-blue-800 dark:to-purple-900"
      >
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between md:gap-12 xl:min-w-[1280px]">
          <div className="hero-content text-center md:text-left flex flex-col justify-center space-y-6">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white xl:text-2xl">
              {t("heroTitle")}
            </h1>
            <p className="text-base text-gray-700 xl:text-lg max-w-xl  ">
              {t("heroDescription")}
            </p>
            <button className="bg-[#2c1a5c] dark:bg-[#1a0e3d] text-white text-base px-5 py-3 rounded-lg shadow-md hover:bg-[#6a3e9f] dark:hover:bg-[#4d1b63] transition-colors duration-300">
             <Link href="/pricing">{t("menuButtonText")}</Link>
          
            </button>
          </div>
          <div className=" w-full md:mt-0 2xl:"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
