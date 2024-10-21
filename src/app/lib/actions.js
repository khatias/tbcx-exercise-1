"use server";

import { cookies } from 'next/headers';

export async function authenticate(formData) {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }), 
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    const cookieStore = cookies();

    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
    });

    cookieStore.set('refreshToken', data.refreshToken, {
      httpOnly: true,
    });

    return { success: true, message: 'Login successful!', data };
  } catch (error) {
    console.error('Error during authentication:', error);
    return { success: false, message: error.message || 'Something went wrong.' };
  }
}

export async function refreshAccessToken() {
  try {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get('refreshToken');

    if (!refreshToken) {
      throw new Error('Refresh token missing');
    }

    const response = await fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        refreshToken: refreshToken.value,
      }),
      credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to refresh access token');
    }

    cookieStore.set('accessToken', data.accessToken, {
      httpOnly: true,
    });

    cookieStore.set('refreshToken', data.refreshToken, {
      httpOnly: true,
    });

    return { success: true, message: 'Access token refreshed successfully!', data };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return { success: false, message: error.message || 'Something went wrong.' };
  }
}

export async function logout() {
  try {

    const cookieStore = cookies(); 
    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');

    console.log('Cookies after logout:', cookieStore.getAll());

    const result = { success: true, message: 'Logout successful!' };
  
    console.log('Logout result:', result); 
    return result; 
  } catch (error) {
    console.error('Error during logout:', error);
    return { success: false, message: 'Something went wrong during logout.' };
  }
}

