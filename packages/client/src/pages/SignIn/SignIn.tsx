import { Link } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useAuth } from '../../hooks/useAuth';
import type { RequestSignIn } from '../../store/auth/type';

const mockParams: RequestSignIn = {
  login: 'Xxxxx',
  password: '123XXXxxx',
};

export default function SignIn() {
  const { logout, signIn, checkIsAuth } = useAuth();

  const handleCheckIsAuth = () => {
    checkIsAuth();
  };

  const handleSignIn = () => {
    signIn(mockParams);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      SignIn
      <button onClick={handleCheckIsAuth}>Проверить авторизацию</button>
      <button onClick={handleSignIn}>Авторизоваться</button>
      <button onClick={handleLogout}>Выход</button>
      <Link to={RouterList.GAME}>game</Link>-
      <Link to={RouterList.PROFILE}>PROFILE</Link>-
      <Link to={RouterList.LEADER_BOARD}>LEADER_BOARD</Link> -
      <Link to={RouterList.NOT_FOUND}>NOT_FOUND</Link> -
      <Link to={RouterList.FORUM}>FORUM</Link> -
      <Link to={RouterList.SIGN_UP}>SIGN_UP</Link>
    </>
  );
}

/* import Button from '../../components/Button';
import Input from '../../components/Input';
import Star from '../../components/Star';
import './SignIn.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import type { RequestSignIn } from '../../store/auth/type';

const mockParams: RequestSignIn = {
  login: 'Xxxxx',
  password: '123XXXxxx',
};

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(mockParams);
    console.log('Authentication hasnt been implemented yet');
    navigateGame();
  };

  const navigate = useNavigate();
  const navigateSignUp = useCallback(
    () => navigate(RouterList.SIGN_UP),
    [navigate]
  );
  const navigateGame = useCallback(() => navigate(RouterList.GAME), [navigate]);

  return (
    <>
      <div className='login'>
        <Star top='10%' left='13%' />
        <Star top='2%' left='32%' />
        <Star top='4%' left='64%' />
        <Star top='13%' left='90%' />

        <div className='mobile__hide'>
          <Star top='29%' left='3%' />
          <Star top='26%' left='18%' />
          <Star top='21%' left='71%' />
          <Star top='48%' left='10%' />
          <Star top='50%' left='77%' />
          <Star top='65%' left='13%' />
          <Star top='73%' left='24%' />
          <Star top='71%' left='88%' />
        </div>

        <Star top='80%' left='3%' />
        <Star top='88%' left='31%' />
        <Star top='89%' left='59%' />
        <Star top='80%' left='71%' />

        <h1 className='login__title'>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </h1>

        <form className='login__signin' onSubmit={handleSignIn}>
          <Input placeholder='Login' className='login__input' />
          <Input placeholder='Password' className='login__input' />
          <Button className='login__button__signin'>Sign In</Button>
        </form>

        <div className='login__signup'>
          <Star size='small' className='star__relative' />
          <Button className='login__button__signup' onClick={navigateSignUp}>
            Sign Up
          </Button>
          <Star size='small' className='star__relative' />
        </div>
      </div>
    </>
  );
} */
