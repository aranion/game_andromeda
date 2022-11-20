import { Star, ButtonStar, AuthForm, TitlePage } from 'src/components';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { useAuth } from 'src/hooks/useAuth';
import type { RequestSignUp } from 'src/store/auth/type';

const configStar = [
  { top: '3%', left: '10%' },
  { top: '22%', left: '21%' },
  { top: '39%', left: '4%' },
  { top: '52%', left: '19%' },
  { top: '67%', left: '10%' },
  { top: '80%', left: '4%' },
  { top: '85%', left: '18%' },
  { top: '4%', left: '76%' },
  { top: '11%', left: '91%' },
  { top: '29%', left: '82%' },
  { top: '38%', left: '93%' },
  { top: '64%', left: '74%' },
  { top: '58%', left: '92%' },
  { top: '77%', left: '88%' },
];

export default function SignUp() {
  const { signUp } = useAuth();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formParams: Record<string, string> = {};
    const formData = new FormData(e.target as HTMLFormElement);
    Array.from(formData.entries()).forEach(([key, value]) => {
      formParams[key] = value as string;
    });
    signUp(formParams as RequestSignUp);
  };

  const navigate = useNavigate();
  const navigateSignIn = () => navigate(RouterList.SIGN_IN);

  return (
    <>
      <div className='main-menu registration'>
        <div className='mobile mobile_hidden'>
          {configStar.map((item, idx) => (
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

        <AuthForm onSubmit={handleSignUp} title='Sign Up'>
          <AuthForm.Input
            typeComponent='input'
            name='email'
            type='email'
            placeholder='Email'
          />
          <AuthForm.Input
            typeComponent='input'
            name='login'
            type='text'
            placeholder='Login'
          />
          <AuthForm.Input
            typeComponent='input'
            name='first_name'
            type='text'
            placeholder='First Name'
          />
          <AuthForm.Input
            typeComponent='input'
            name='second_name'
            type='text'
            placeholder='Last Name'
          />
          <AuthForm.Input
            typeComponent='input'
            name='phone'
            type='text'
            placeholder='Phone'
          />
          <AuthForm.Input
            typeComponent='input'
            name='password'
            type='password'
            placeholder='Password'
          />
          <AuthForm.Input
            typeComponent='input'
            name='password'
            type='password'
            placeholder='Password (Again)'
          />
        </AuthForm>

        <ButtonStar onClick={navigateSignIn}>Sign In</ButtonStar>
      </div>
    </>
  );
}
