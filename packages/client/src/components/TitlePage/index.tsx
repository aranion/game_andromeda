import cls from './styles.module.css';

export function TitlePage(props: Props) {
  const { title } = props;

  return <h1 className={cls.titlePage}>{title}</h1>;
}

type Props = {
  title: string;
};
