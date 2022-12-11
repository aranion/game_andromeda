import { useTypeSelector } from './useTypeSelector';
import { useNavigate } from 'react-router-dom';
import { useActions } from './useActions';
import { RouterList } from 'src/router/routerList';
import { userSelectors } from 'src/store/user';
import {
  useLazyUpdateAvatarQuery,
  useLazyUpdatePasswordQuery,
  useLazyUpdateProfileQuery,
} from 'src/store/user/api';
import type {
  RequestUpdatePassword,
  RequestUpdateProfile,
} from 'src/store/user/type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useUpdateProfile = () => {
  const navigate = useNavigate();

  const { userData } = useTypeSelector(userSelectors.all);
  const { id } = userData;
  const { setUserData } = useActions();

  const [fetchUpdateAvatar, { isFetching: isLoadingAvatar }] =
    useLazyUpdateAvatarQuery();
  const [fetchUpdatePassword, { isFetching: isLoadingPassword }] =
    useLazyUpdatePasswordQuery();
  const [fetchUpdateProfile, { isFetching: isLoadingProfile }] =
    useLazyUpdateProfileQuery();

  const error = (error?: FetchBaseQueryError | SerializedError) => {
    if (error) {
      if ('message' in error) {
        throw new Error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  const updateProfile = (data: RequestUpdateProfile) => {
    fetchUpdateProfile(data)
      .then(res => {
        if (res.data) {
          setUserData(res.data);
          navigate(`${RouterList.PROFILE}/${id}`, { replace: true });
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
  };

  const updateAvatar = (file: File) => {
    const data = new FormData();
    data.append('avatar', file);

    fetchUpdateAvatar(data)
      .then(res => {
        if (res.data) {
          setUserData(res.data);
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
  };

  const updatePassword = (data: RequestUpdatePassword) => {
    fetchUpdatePassword(data)
      .then(res => {
        if (res.data) {
          navigate(`${RouterList.PROFILE}/${id}`, { replace: true });
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
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
