// auth.js
const CLIENT_ID = '84a54e06143c4d60b9bd237ef3f3b280';
const REDIRECT_URI = 'http://localhost:5173/';
const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-library-read',
  'playlist-read-private',
].join(' ');

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=${encodeURIComponent(SCOPES)}`;

export const loginWithSpotify = () => {
  localStorage.removeItem('spotify_token');
  window.location.href = AUTH_URL;
};

export const getToken = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const token = params.get('access_token');

  if (token) {
    localStorage.setItem('spotify_token', token);
    window.history.pushState({}, document.title, window.location.pathname);
    return token;
  }

  return localStorage.getItem('spotify_token');
};
