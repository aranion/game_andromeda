import { Button, Star, AuthForm } from '../../components';
import './styles.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterList } from '../../router/routerList';
import { useAuth } from '../../hooks/useAuth';
import type { RequestSignIn } from '../../store/auth/type';

const configStar = [
  { top: '10%', left: '13%' },
  { top: '2%', left: '32%' },
  { top: '4%', left: '64%' },
  { top: '13%', left: '90%' },
  { top: '80%', left: '3%' },
  { top: '88%', left: '31%' },
  { top: '89%', left: '59%' },
  { top: '80%', left: '71%' },
];

const configStarNoMobile = [
  { top: '29%', left: '3%' },
  { top: '26%', left: '18%' },
  { top: '21%', left: '71%' },
  { top: '48%', left: '10%' },
  { top: '50%', left: '77%' },
  { top: '65%', left: '13%' },
  { top: '73%', left: '24%' },
  { top: '71%', left: '88%' },
];

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formParams: Record<string, string> = {};
    const formData = new FormData(e.target as HTMLFormElement);
    Array.from(formData.entries()).forEach(([key, value]) => {
      formParams[key] = value as string;
    });
    signIn(formParams as RequestSignIn);
  };

  const navigate = useNavigate();
  const navigateSignUp = useCallback(
    () => navigate(RouterList.SIGN_UP),
    [navigate]
  );

  return (
    <>
      <div className='login'>
        {configStar.map((item, idx) => (
          <Star key={idx} top={item.top} left={item.left} />
        ))}

        <div className='mobile mobile_hidden'>
          {configStarNoMobile.map((item, idx) => (
            <Star key={idx} top={item.top} left={item.left} />
          ))}
        </div>

        <h1 className='login__title'>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </h1>

        <AuthForm onSubmit={handleSignIn} title='Sign In'>
          <AuthForm.Input name='login' type='text' placeholder='Login' />
          <AuthForm.Input
            name='password'
            type='password'
            placeholder='Password'
          />
        </AuthForm>

        <div className='login__signup'>
          <Star size='small' relative={true} />
          <Button className='login__signup-button' onClick={navigateSignUp}>
            Sign Up
          </Button>
          <Star size='small' relative={true} />
        </div>
      </div>
    </>
  );
}
