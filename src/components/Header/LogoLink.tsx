import Link from "next/link";
import navLogo from "../../assets/logo.png"

function LogoLink() {
  return (
    <div className="">
      <Link href="/">
        <img className="w-20 md:w-36"  src={navLogo.src} alt="cafe logo" />
      </Link>
    </div>
  );
}

export default LogoLink;
