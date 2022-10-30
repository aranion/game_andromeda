import { PureComponent }  from 'react';
import classnames from 'classnames';

import './Button.css';

type ButtonProps = {
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (...args: any) => void;
    className?: string;
};

export class Button extends PureComponent<ButtonProps> {
    render() {
        const classNames = classnames('button', this.props.className);
        return (
            <button onClick={this.props.onClick} className={classNames}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
