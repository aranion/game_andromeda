import { PureComponent } from 'react';
import classnames from 'classnames';

import './Input.css';

type InputProps = {
  onChange?: () => void;
  className?: string;
  placeholder?: string;
};

export class Input extends PureComponent<InputProps> {
  render() {
    const classNames = classnames('input', this.props.className);

    return (
      <input
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        className={classNames}
      />
    );
  }
}

export default Input;
