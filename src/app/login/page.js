// src/app/login/page.js
"use client";
import React from 'react';
import Header from '../../components/Header/Header';
import { authenticate } from '../lib/actions';
import './login.css';

export default function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const result = await authenticate(formData);
    
    if (result.success) {
     
      window.location.href = '/profile'; 
    } else {
   
      alert(result.message);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
