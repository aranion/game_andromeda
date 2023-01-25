import classnames from 'classnames';
import './styles.css';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export function Input(props: PropsInput) {
  const { className, ...otherProps } = props;
  const { typeComponent } = otherProps;

  const classNames = classnames(typeComponent, className);

  if (typeComponent === 'textarea') {
    const { typeComponent, ...attributes } = otherProps;

    return <textarea {...attributes} className={classNames} />;
  } else {
    const { typeComponent, ...attributes } = otherProps;

    return <input {...attributes} className={classNames} />;
  }
}

export type PropsInput = InputProps | TextareaProps;

type InputProps = {
  typeComponent: 'input';
} & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = {
  typeComponent: 'textarea';
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
