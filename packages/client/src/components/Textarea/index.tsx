import React, { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<Props> = props => {
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
