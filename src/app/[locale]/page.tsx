import { useTranslations } from "next-intl";
import Content from "../../components/Content/Content";

export default function HomePagee() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Content />
    </>
  );
}
