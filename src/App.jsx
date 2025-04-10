import React, { useEffect } from 'react';
import { loginWithSpotify, getToken } from './Data/Auth';
import initializePlayer from './component/Spotify';
import { checkScope } from './Data/Api';

import Alarm from './component/Alarm';
import Music from './component/Music';
import SpotifyPlayer from './component/Spotify';
import './App.css';

import CNJoke from './Data/CN';

function App() {
  useEffect(() => {
    const token = getToken();
    if (!token) {
      console.log('No token found, prompting login.');
      loginWithSpotify();
    } else {
      console.log('Token found, initializing player.');
      initializePlayer();
    }
  }, []);

  return (
    <>
      <Alarm />
      <Music />
      <button onClick={loginWithSpotify}>Login to Spotify</button>
      <button onClick={checkScope}>Check Scope</button>
      <CNJoke />
    </>
  );
}

export default App;
