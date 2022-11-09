import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import './styles.css';

export function ButtonBack() {
  const navigate = useNavigate();
  const backNavigate = () => navigate(-1);
  return (
    <Button className='button__back' onClick={backNavigate}>
      🠔
    </Button>
  );
}
