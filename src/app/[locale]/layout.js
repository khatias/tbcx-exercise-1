
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing'; 
import Header from'../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "../../globals.css";
// import { Children } from 'react';

export default async function LocaleLayout({
  children,
  params: { locale }
}) {
 
  if (!routing.locales.includes(locale)) {
    notFound();
  }


  const messages = await getMessages(locale);

  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header locale={locale} />
        {children}
        <Footer />
      </NextIntlClientProvider>
  
  );
}
