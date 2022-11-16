import cls from './styles.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Loader, Button, Input } from 'src/components';
import { RouterList } from 'src/router/routerList';
import type { FormEvent } from 'react';
import type { Fields } from 'src/pages/Profile';

export function ProfileFields(props: Props) {
  const { isEdit, isLoading, fields, userId } = props;

  const navigate = useNavigate();

  const clsFieldValue = classNames(cls.profileFields__field_value, {
    [cls.profileFields__field_edit]: isEdit,
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (userId) {
      navigate(`${RouterList.PROFILE}/${userId}`);
    }
  };

  return (
    <form className={cls.profileFields} onSubmit={handleSubmitForm}>
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
  fields: Fields[];
  userId: number | null;
};
