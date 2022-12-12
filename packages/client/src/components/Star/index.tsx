import classnames from 'classnames';

import './styles.css';

type StarProps = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  className?: string;
  relative?: boolean;
  size?: 'small' | 'normal' | 'big';
};

export function Star(props: StarProps) {
  const { top, right, left, bottom, className, relative, size } = props;
  let newSize = size;

  if (!newSize) {
    const randomNum = Math.floor(Math.random() * 3 + 1);
    if (randomNum === 1) {
      newSize = 'small';
    } else if (randomNum === 2) {
      newSize = 'normal';
    } else {
      newSize = 'big';
    }
  }
  let starPosition = '';
  if (relative) {
    starPosition = 'star_position_relative';
  }
  const classNames = classnames(
    'star',
    `star_size_${newSize}`,
    className,
    starPosition
  );

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 156.91 208.06'
      className={classNames}
      style={{
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}>
      <path d='M78.94 208.06v-.2C78.67 150.6 43.48 104.43.3 104.69H0C43.3 104.42 78.24 57.6 77.97.19V0 .2c.27 57.42 35.63 103.65 78.94 103.19h-.29c-43.2.46-77.95 47.21-77.68 104.49Z' />
    </svg>
  );
}
