import classnames from 'classnames';
import { Input, Button } from 'src/components';
import './styles.css';
import type { PropsInput } from 'src/components';

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

Form.Input = function FormInput(props: PropsInput) {
  const { typeComponent } = props;

  return <Input {...props} className={`form__${typeComponent}`} />;
};
