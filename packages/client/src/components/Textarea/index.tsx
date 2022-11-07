import React, { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<TextareaProps> = props => {
  const { placeholder, onChange, className, value } = props;
  const classNames = classnames('textarea', className);

  return (
    <textarea
      {...props}
      className={classNames}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
