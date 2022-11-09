import { Avatar } from '../../components';

export default function Profile() {
  return (
    <>
      Profile
      <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
        <Avatar />
        <Avatar isEditAvatar={true} path={'/path/img.jpg'} />
      </div>
    </>
  );
}
