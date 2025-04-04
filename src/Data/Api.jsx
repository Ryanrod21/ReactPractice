// api.js
import { getToken, loginWithSpotify } from './Auth';

export const checkScope = async () => {
  const token = getToken();

  if (!token) {
    console.error('No access token found! Redirecting to login...');
    loginWithSpotify(); // Re-authenticate if token is missing
    return;
  }

  try {
    const response = await fetch(
      'https://api.spotify.com/v1/melody/v1/check_scope?scope=web-playback',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    console.log('Scope Check:', data);
  } catch (error) {
    console.error('Error checking scope:', error);
  }
};
