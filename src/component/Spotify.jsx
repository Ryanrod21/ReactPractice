// SpotifyPlayer.js
import { getToken, loginWithSpotify } from '../Data/Auth';

const initializePlayer = () => {
  const token = getToken();
  console.log('Retrieved Token:', token);

  if (!token) {
    console.error('No access token found! User must log in.');
    loginWithSpotify();
    return;
  }

  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new window.Spotify.Player({
      name: 'Web Playback SDK',
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });

    player.addListener('ready', ({ device_id }) => {
      console.log('Player Ready with Device ID', device_id);
      transferPlayback(device_id);
    });

    player.connect();
  };
};

const transferPlayback = async (deviceId) => {
  const token = getToken();

  if (!token) {
    console.error('No access token found! User must log in.');
    return;
  }

  const response = await fetch('https://api.spotify.com/v1/me/player', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      device_ids: [deviceId],
      play: true,
    }),
  });

  if (!response.ok) {
    console.error('Failed to transfer playback', await response.json());
  } else {
    console.log('Playback transferred successfully');
  }
};

export default initializePlayer;
