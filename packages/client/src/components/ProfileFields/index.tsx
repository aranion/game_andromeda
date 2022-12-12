import cls from './styles.module.css';
import classNames from 'classnames';
import { Loader, Button, Input } from 'src/components';
import {
  RequestUpdatePassword,
  RequestUpdateProfile,
  useUpdateProfile,
} from 'src/hooks/useUpdateProfile';
import type { FormEvent } from 'react';
import type { Fields } from 'src/pages/Profile';

export function ProfileFields(props: Props) {
  const { isEdit, isEditPassword, isLoading, fields, userId } = props;

  const { updatePassword, updateProfile, isLoadingPassword, isLoadingProfile } =
    useUpdateProfile();

  const clsFieldValue = classNames(cls.profileFields__field_value, {
    [cls.profileFields__field_edit]: isEdit,
  });

  if (isLoading) {
    return <Loader position='relative' />;
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (userId) {
      const data = new FormData(e.currentTarget).entries();
      const fields: Record<string, string> = {};

      for (const item of data) {
        const key = item[0];
        const value = item[1];

        if (typeof value === 'string') {
          fields[key] = value;
        }
      }

      if (isEditPassword) {
        delete fields.repeatPassword;
        updatePassword(fields as RequestUpdatePassword);
      } else {
        updateProfile(fields as RequestUpdateProfile);
      }
    }
  };

  return (
    <form className={cls.profileFields} onSubmit={handleSubmitForm}>
      {(isLoadingPassword || isLoadingProfile) && <Loader />}

      {fields.map(field => {
        const { label, key, value, ...otherProps } = field;

        return (
          <div key={key} className={cls.profileFields__field}>
            <label className={cls.profileFields__field_title} htmlFor={key}>
              {label}
            </label>
            <Input
              {...otherProps}
              typeComponent='input'
              name={key}
              id={key}
              readOnly={!isEdit}
              className={clsFieldValue}
              defaultValue={value || ''}
            />
          </div>
        );
      })}
      {isEdit && <Button type='submit'>Save</Button>}
    </form>
  );
}

type Props = {
  isLoading: boolean;
  isEdit: boolean;
  isEditPassword: boolean;
  fields: Fields[];
  userId: number | null;
};
