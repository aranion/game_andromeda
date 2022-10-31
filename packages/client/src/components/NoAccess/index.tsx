import './style.css';
import NoAccessImg from '../../assets/imgs/noAccess.svg';

export function NoAccess() {
  return (
    <div className='noAccess'>
      <img className='noAccess__img' src={NoAccessImg} alt='no access' />
      <p className='noAccess__text'>Проверка доступа</p>
    </div>
  );
}
