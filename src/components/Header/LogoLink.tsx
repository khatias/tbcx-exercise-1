import React from "react";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../assets/logo.png";
import { useLocale } from "next-intl";

function LogoLink() {
  const locale = useLocale();
  return (
    <div className="">
      <Link href={`/${locale}`}>
        <Image
          className="w-20 md:w-36"
          src={navLogo.src}
          alt=" logo"
          width={144}
          height={36}
        />
      </Link>
    </div>
  );
}

export default LogoLink;
