import Link from "next/link";
import navLogo from "../../assets/logo.png";
import { useLocale } from "next-intl";

function LogoLink() {
  const locale = useLocale(); 
  return (
    <div className="">
      {/* Corrected href with dynamic locale */}
      <Link href={`/${locale}/`}>
        <img className="w-20 md:w-36" src={navLogo.src} alt="cafe logo" />
      </Link>
    </div>
  );
}

export default LogoLink;