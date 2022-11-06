import { FC } from 'react';
import './styles.css';

type Props = React.HTMLAttributes<HTMLElement>;

export const Table: FC<Props> = ({ children }) => {
  return <table className='table'>{children}</table>;
};
