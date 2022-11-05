import classnames from 'classnames';
import { Input, InputProps } from '../Input';
import { Button } from '../Button';

import './styles.css';

type AuthFormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function AuthForm(props: AuthFormProps) {
  const { onSubmit, className, children, title } = props;
  const classNames = classnames('authform', className);
  return (
    <>
      <form {...props} onSubmit={onSubmit} className={classNames}>
        {children}
        <Button className='authform__submit-button'>{title}</Button>
      </form>
    </>
  );
}

AuthForm.Input = function FormInput(props: InputProps) {
  return <Input {...props} className='authform__input' />;
};
