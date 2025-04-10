import React, { useEffect } from 'react';
import { loginWithSpotify, getToken } from './Data/Auth';
import initializePlayer from './component/Spotify';
import { checkScope } from './Data/Api';

import Alarm from './component/Alarm';
import Music from './component/Music';
import SpotifyPlayer from './component/Spotify';
import './App.css';
import Navbar from './component/NavBar';
import Chuck from './component/ChuckAPI';

function App() {
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     console.log('No token found, prompting login.');
  //     loginWithSpotify();
  //   } else {
  //     console.log('Token found, initializing player.');
  //     initializePlayer();
  //   }
  // }, []);

  return (
    <>
      <div className="Nav">
        <Navbar />
      </div>
      <Alarm />
      {/* <Music /> */}
      <button onClick={loginWithSpotify}>Login to Spotify</button>
      <button onClick={checkScope}>Check Scope</button>

      <Chuck />
    </>
  );
}

export default App;
