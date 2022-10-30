import Button from '../../components/Button';
import Input from '../../components/Input';
import Star from '../../components/Star';
import './SignIn.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';


export default function SignIn() {
  const navigate = useNavigate();
  const navigateSignUp = useCallback(() => navigate(RouterList.SIGN_UP), [navigate]);
  const navigateGame = useCallback(() => navigate(RouterList.GAME), [navigate]);
  const handleSignIn = (e: Event) => {
    e.preventDefault();
    console.log('Authentication hasnt been implemented yet');
    navigateGame();
  };

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
      Journey<br />
      to the<br />
      Andromeda
    </h1>

    <form className='login__signin'>
      <Input placeholder='Login' className='login__input' />
      <Input placeholder='Password' className='login__input' />
      <Button className='login__button__signin' onClick={handleSignIn}>Sign In</Button>
    </form>

    <div className='login__signup'>
      <Star size='small' className='star__relative' />
      <Button className='login__button__signup' onClick={navigateSignUp}>Sign Up</Button>
      <Star size='small' className='star__relative' />
    </div>
  </div>
  </>
  );
}
