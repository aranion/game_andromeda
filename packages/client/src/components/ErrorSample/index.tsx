import cls from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';
import { Button, TitlePage } from 'src/components';

export function ErrorSample(props: Props) {
  const { code, message, typeButton } = props;

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (typeButton === 'back') {
      navigate(-1);
    } else {
      navigate(RouterList.HOME);
    }
  };

  return (
    <div className={cls.errorSample}>
      <section>
        <TitlePage>ERROR</TitlePage>
        <span className={cls.errorSample__code}>{code}</span>
        <p>{message}</p>
        <Button onClick={handleGoBack} className={cls.errorSample__buttonBack}>
          {typeButton === 'back' ? 'Back' : 'Go Home'}
        </Button>
      </section>
    </div>
  );
}

type Props = {
  code: string;
  message: string;
  typeButton: 'home' | 'back';
};
