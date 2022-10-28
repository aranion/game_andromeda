import './App.css';
import { useEffect } from 'react';
import { Router } from './router';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    fetchServerData();
  }, []);

  return (
    <main>
      <section>
        <Router />
      </section>
    </main>
  );
}

export default App;
