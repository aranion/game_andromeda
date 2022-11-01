import { useAuth } from '../../hooks/useAuth';
import type { RequestSignUp } from '../../store/auth/type';

const mockParams: RequestSignUp = {
  email: 'xxxxxxxxs@mail.ru',
  first_name: 'Xxxxxxx',
  login: 'Xxxxxxxxx',
  password: '123XXXxxx',
  phone: '123456789',
  second_name: 'Xxxxx',
};

export default function SignUp() {
  const { signUp } = useAuth();

  const handleSignUp = () => {
    signUp(mockParams);
  };

  return (
    <>
      SignUp
      <button onClick={handleSignUp}>Регистрация</button>
    </>
  );
}
