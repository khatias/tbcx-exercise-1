import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default async function ProtectedLayout({ children }) {
  const session = await getSession();


  if (!session) {
    redirect('/api/auth/login'); 
    return null; 
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
