import classnames from 'classnames';
import { ReactElement } from 'react';
import './styles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputTextProps = InputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { typeInput?: string };

export function Input(props: InputTextProps) {
  const { typeInput = 'input', className, ...otherProps } = props;
  const classNames = classnames(typeInput, className);

  let input: ReactElement;
  if (typeInput === 'input') {
    input = <input {...otherProps} className={classNames} />;
  } else {
    input = <textarea {...otherProps} className={classNames} />;
  }

  return input;
}
