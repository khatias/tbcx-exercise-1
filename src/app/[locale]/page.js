import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    // <div>
    //   <h1>{t('title')}</h1>
    //   <Link href="/about">{t('about')}</Link>
    // </div>
    <>
    <Header/>
    <Content/>
    <Footer/>
      </>
  );
}