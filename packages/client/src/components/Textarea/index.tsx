import type { FC } from 'react';
import classnames from 'classnames';
import './styles.css';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<TextareaProps> = props => {
  const { className, ...otherProps } = props;
  const classNames = classnames('textarea', className);

  return <textarea className={classNames} {...otherProps} />;
};
