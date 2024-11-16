import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
 
export default function HomePagee() {
  const t = useTranslations('HomePage');
  return (

    <>

    <Content/>
 
      </>
  );
}