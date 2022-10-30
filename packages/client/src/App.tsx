import './App.css';
import { useEffect } from 'react';
import { Router } from './router';
import { useLazyCheckAuthUserQuery } from './store/auth/api';
import { useActions } from './hooks/useActions';

function App() {
  const { setIsAuth } = useActions();

  const [checkAuthUser] = useLazyCheckAuthUserQuery();

  useEffect(() => {
    checkAuthUser(null).then(res => {
      setIsAuth(res.isSuccess);
    });

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
