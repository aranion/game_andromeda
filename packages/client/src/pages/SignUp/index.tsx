import { mockParamsSignUp } from '../../constants/mockData';
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
  const { signUp } = useAuth();

  const handleSignUp = () => {
    signUp(mockParamsSignUp);
  };

  return (
    <>
      SignUp
      <button onClick={handleSignUp}>Регистрация</button>
    </>
  );
}
