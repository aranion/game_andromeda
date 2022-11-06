import classnames from 'classnames';
import './styles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { placeholder, onChange, className } = props;
  const classNames = classnames('input', className);

  return (
    <input
      {...props}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames}
    />
  );
}
