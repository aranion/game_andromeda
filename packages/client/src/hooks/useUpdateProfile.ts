import { useState } from 'react';
import { useTypeSelector } from './useTypeSelector';
import { useNavigate } from 'react-router-dom';
import { useActions } from './useActions';
import { RouterList } from 'src/router/routerList';
import { userSelectors } from '../../../server/store/user';
import { BASE_URL } from '../../../server/constants/vars';
import type { User } from '../../../server/store/user/type';

export const useUpdateProfile = () => {
  const URI_USER = `${BASE_URL}/user`;
  const DEFAULT_OPTIONS = {
    credentials: 'include',
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  } as const;

  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingPassword, setIsLoadingPassword] = useState(false);

  const { setUserData } = useActions();

  const navigate = useNavigate();

  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;

  const transformResponse = (res: ResponseUpdateProfile): User | null => {
    if ('status' in res) {
      delete res.status;
      return res;
    }

    return null;
  };

  const error = (error?: Error) => {
    if (error) {
      if ('reason' in error) {
        throw new Error(error.reason);
      } else {
        console.error(error);
      }
    }
  };

  const updateProfile = (data: RequestUpdateProfile) => {
    setIsLoadingProfile(true);

    fetch(`${URI_USER}/profile`, {
      ...DEFAULT_OPTIONS,
      body: JSON.stringify(data),
    })
      .then<ResponseUpdateProfile>(res => res.json())
      .then(res => {
        if ('reason' in res) {
          error(res);
        } else {
          const userData = transformResponse(res);

          if (userData) {
            setUserData(userData);
            navigate(`${RouterList.PROFILE}/${id}`, { replace: true });
          }
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingProfile(false);
      });
  };

  const updateAvatar = (file: File) => {
    setIsLoadingAvatar(true);

    const data = new FormData();
    data.append('avatar', file);

    fetch(`${URI_USER}/profile/avatar`, {
      ...DEFAULT_OPTIONS,
      body: data,
      headers: {},
    })
      .then<ResponseUserData>(res => res.json())
      .then(res => {
        if ('reason' in res) {
          error(res);
        } else {
          const userData = transformResponse(res);

          if (userData) {
            setUserData(userData);
          }
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingAvatar(false);
      });
  };

  const updatePassword = (data: RequestUpdatePassword) => {
    setIsLoadingPassword(true);

    fetch(`${URI_USER}/password`, {
      ...DEFAULT_OPTIONS,
      body: JSON.stringify(data),
    })
      .then<ResponseUpdatePassword>(res => res.text())
      .then(res => {
        if (typeof res !== 'string') {
          error(res);
        } else {
          navigate(`${RouterList.PROFILE}/${id}`, { replace: true });
        }
      })
      .catch(console.error)
      .finally(() => {
        setIsLoadingPassword(false);
      });
  };

  return {
    updateProfile,
    updateAvatar,
    updatePassword,
    isLoadingAvatar,
    isLoadingPassword,
    isLoadingProfile,
  };
};

type Error = {
  reason: string;
};

export type ResponseUserData = User | Error;
type ResponseUpdateProfile = (User & { status?: string | null }) | Error;
type ResponseUpdatePassword = string | Error;

export type RequestUpdatePassword = {
  oldPassword: string;
  newPassword: string;
};
export type RequestUpdateProfile = Omit<User, 'id' | 'avatar'>;
