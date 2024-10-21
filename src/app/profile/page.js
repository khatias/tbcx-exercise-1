import { cookies } from 'next/headers';
import { refreshAccessToken } from '../lib/actions';
import Header from '../../components/Header/Header';
import './ProfilePage.css'

export default async function ProfilePage() {
  const cookieStore = cookies();
  let token = cookieStore.get('accessToken'); 


  if (!token) {
    const refreshResponse = await refreshAccessToken();
    if (!refreshResponse.success) {
      return <h1>Please log in</h1>;
    }
    token = cookieStore.get('accessToken'); 
  }


  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.value}`, 
    },
    credentials: 'include',
  });

  const data = await response.json();

  if (!response.ok) {
    return <h1>Failed to load profile</h1>;
  }

  return (
    <>
    <Header/>
    <div className='profile-container'>
      <h1>Welcome, {data.username}!</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.email}</p>
    </div>
    </>
  );
}




