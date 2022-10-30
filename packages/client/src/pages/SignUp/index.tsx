import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useSignUpMutation } from '../../store/auth/api';
import { RequestSignUp } from '../../store/auth/type';

export default function SignUp() {
  const { isAuth } = useTypeSelector(state => state.auth);

  const { setIsAuth, setUserId } = useActions();

  const [fetchSignUp] = useSignUpMutation();

  const handleSignUp = () => {
    const mockParams: RequestSignUp = {
      email: 'xxxxxx@mail.ru',
      first_name: 'Xxxxxx',
      login: 'Xxxxx',
      password: '123XXXxxx',
      phone: '123456789',
      second_name: 'Xxxxx',
    };

    if (!isAuth) {
      fetchSignUp(mockParams).then(res => {
        if ('data' in res) {
          setUserId(res.data.id);
          setIsAuth(true);
        } else {
          console.error(res.error);
        }
      });
    }
  };

  return (
    <>
      SignUp
      <button onClick={handleSignUp}>Регистрация</button>
    </>
  );
}
