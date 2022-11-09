import classnames from 'classnames';
import './styles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  const { className, ...otherProps } = props;
  const classNames = classnames('input', className);

  return <input {...otherProps} className={classNames} />;
}
