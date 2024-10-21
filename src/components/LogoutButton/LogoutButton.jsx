'use client';

import { useRouter } from 'next/navigation';
import { logout } from '../../app/lib/actions'; 



export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logout(); 

    if (result.success) {
      alert(result.message); 
      router.push('/login'); 
    } else {
      alert(result.message || 'Logout failed.'); 
    }
  };

  return (
    <button onClick={handleLogout} style={buttonStyle}>
      Logout
    </button>
  );
}

const buttonStyle = {
  color: "black",
  border: 'none',
  fontSize: "16px",
  fontWeight: '700',
  cursor: 'pointer', 

};