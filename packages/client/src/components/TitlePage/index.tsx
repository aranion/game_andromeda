import cls from './styles.module.css';

export function TitlePage(props: React.PropsWithChildren) {
  return <h1 className={cls.titlePage}>{props.children}</h1>;
}
