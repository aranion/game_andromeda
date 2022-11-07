import { FC } from 'react';
import './styles.css';

type TableProps = React.HTMLAttributes<HTMLElement>;

export const Table: FC<TableProps> = ({ children }) => {
  return <table className='table'>{children}</table>;
};
