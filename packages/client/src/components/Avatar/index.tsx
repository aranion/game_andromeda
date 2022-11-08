import './style.css';
import { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import e from 'express';

const mockPath =
  '/6c0b6793-6a62-45c9-ad9a-4c09963ecb69/09b83bb3-7455-4c3b-925e-b5380cf77c76_334638.jpg';

export function Avatar(props: Props) {
  const { path = mockPath, isEditAvatar = false } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleEditAvatar = () => {
    const elem = document.createElement('input');
    elem.type = 'file';
    elem.click();
    elem.remove();
  };

  useEffect(() => {
    if (path) {
      setIsLoading(true);

      fetch(`https://ya-praktikum.tech/api/v2/resources${path}`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
        .then(res => {
          if (res.ok) {
            return res.blob();
          } else {
            throw new Error('Error');
          }
        })
        .then(res => {
          setAvatar(URL.createObjectURL(res));
        })
        .catch(err => {
          console.log(err);
          setAvatar(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [path]);

  return (
    <div className='avatar'>
      {isLoading && <Loader />}
      {isEditAvatar && (
        <button className='avatar__edit' onClick={handleEditAvatar}>
          Изменить аватар
        </button>
      )}
      {avatar && <img src={avatar} alt='avatar' className='avatar__img' />}
    </div>
  );
}

type Props = {
  path?: string;
  isEditAvatar?: boolean;
};
