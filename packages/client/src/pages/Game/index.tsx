import { Link } from 'react-router-dom';
import { RouterList } from '../../router/routerList';

export default function Game() {
  return (
    <>
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
      Game
      <div>Вот тут будет жить ваше приложение :)</div>
    </>
  );
}
