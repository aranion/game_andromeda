import { Star, ButtonStar, AuthForm, TitlePage } from 'src/components';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useAuth } from 'src/hooks/useAuth';
import type { RequestSignIn } from 'src/store/auth/type';

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
    const formData = new FormData(e.currentTarget);
    Array.from(formData.entries()).forEach(([key, value]) => {
      formParams[key] = value as string;
    });
    signIn(formParams as RequestSignIn);
  };

  const navigate = useNavigate();
  const navigateSignUp = () => navigate(RouterList.SIGN_UP);

  return (
    <>
      <div className='main-menu login'>
        {configStar.map((item, idx) => (
          <Star key={idx} top={item.top} left={item.left} />
        ))}

        <div className='mobile mobile_hidden'>
          {configStarNoMobile.map((item, idx) => (
            <Star key={idx} top={item.top} left={item.left} />
          ))}
        </div>

        <TitlePage>
          Journey
          <br />
          to the
          <br />
          Andromeda
        </TitlePage>

        <AuthForm onSubmit={handleSignIn} title='Sign In'>
          <AuthForm.Input
            typeComponent='input'
            name='login'
            type='text'
            placeholder='Login'
          />
          <AuthForm.Input
            typeComponent='input'
            name='password'
            type='password'
            placeholder='Password'
          />
        </AuthForm>

        <ButtonStar onClick={navigateSignUp}>Sign Up</ButtonStar>
      </div>
    </>
  );
}
