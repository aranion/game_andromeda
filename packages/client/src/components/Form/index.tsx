import classnames from 'classnames';
import { Input, InputProps } from '../Input';
import { Textarea, TextareaProps } from '../Textarea';
import { Button } from '../Button';
import './styles.css';

type Props = React.FormHTMLAttributes<HTMLFormElement>;

export function Form(props: Props) {
  const { className, children, title, ...otherProps } = props;
  const classNames = classnames('form', className);

  return (
    <form {...otherProps} className={classNames}>
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
