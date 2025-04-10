import { useEffect } from 'react';

function CNJoke() {
  const getChuckNorrisJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      document.getElementById('joketext').textContent = data.value;
      console.log('Chuck Norris joke:', data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div>
      <button onClick={getChuckNorrisJoke}> Click </button>
      <h1 id="joketext"></h1>
    </div>
  );
}

export default CNJoke;
