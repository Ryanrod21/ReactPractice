import { useEffect, useState } from 'react';

function MusicData() {
  const [accessToken, setAccessToken] = useState('');

  const Client_ID = '';
  const Client_Secret = '';

  useEffect(() => {
    const authPara = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        Client_ID +
        '&client_secret=' +
        Client_Secret,
    };

    fetch('https://accounts.spotify.com/api/token', authPara)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((error) => console.log('Error:', error));
  }, []);

  const getAlbum = async () => {
    const response = {
      method: 'GET',
      headers: { Authorization: 'Bearer' + accessToken },
    };
    const artistID = await fetch(
      'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
    );
  };

  return <div>FFFF</div>;
}

export default MusicData;
