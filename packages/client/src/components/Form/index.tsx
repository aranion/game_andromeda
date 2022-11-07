import classnames from 'classnames';
import { Input, InputProps } from '../Input';
import { Textarea, TextareaProps } from '../Textarea';
import { Button } from '../Button';

import './styles.css';

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export function Form(props: FormProps) {
  const { onSubmit, className, children, title } = props;
  const classNames = classnames('form', className);

  return (
    <form {...props} onSubmit={onSubmit} className={classNames}>
      {children}
      <Button className='form__button'>{title}</Button>
    </form>
  );
}

Form.Input = function FormInput(props: InputProps) {
  return <Input {...props} className='form__input' />;
};

Form.Textarea = function FormInput(props: TextareaProps) {
  return <Textarea {...props} className='form__textarea' />;
};
