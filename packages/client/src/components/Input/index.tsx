import classnames from 'classnames';
import { ReactElement } from 'react';
import './styles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputTextProps = InputProps | TextareaProps | any;

export function Input(props: InputTextProps): ReactElement {
  const { typeInput = 'input', className, ...otherProps } = props;
  const classNames = classnames(typeInput, className);

  let input;
  if (typeInput === 'input') {
    input = <input {...otherProps} className={classNames} />;
  } else {
    input = <textarea {...otherProps} className={classNames} />;
  }

  return input;
}
