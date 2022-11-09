import classnames from 'classnames';
import { Input, InputProps, Button } from 'src/components';

import './styles.css';

type AuthFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function AuthForm(props: AuthFormProps) {
  const { className, children, title } = props;
  const classNames = classnames('authform', className);
  return (
    <>
      <form {...props} className={classNames}>
        {children}
        <Button className='authform__submit-button'>{title}</Button>
      </form>
    </>
  );
}

AuthForm.Input = function FormInput(props: InputProps) {
  return <Input {...props} className='authform__input' />;
};
