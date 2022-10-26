import './App.css';
import { useEffect } from 'react';
import { Router } from './router';
import { Link } from 'react-router-dom';
import { RouterList } from './router/routerList';

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
      <nav>
        {/* Links для проверки роутера, при добавлении страниц можно удалить */}
        <Link to={RouterList.HOME}>HOME</Link> -
        <Link to={RouterList.SIGN_IN}>SIGN_IN</Link> -
        <Link to={RouterList.SIGN_UP}>SIGN_UP</Link> -
        <Link to={RouterList.SERVER_ERROR}>SERVER_ERROR</Link> -
        <Link to={RouterList.NOT_FOUND}>NOT_FOUND</Link> -
        <Link to={RouterList.GAME}>GAME</Link> -
        <Link to={RouterList.FORUM}>FORUM</Link> -
        <Link to={RouterList.LEADER_BOARD}>LEADER_BOARD</Link> -
        <Link to={RouterList.PROFILE}>PROFILE</Link> -
      </nav>

      <section>
        <Router />
      </section>
    </main>
  );
}

export default App;
