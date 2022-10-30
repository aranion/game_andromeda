import { Component }  from 'react';
import classnames from 'classnames';

import './Star.css';

type StarProps = {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    className?: string;
    size?: 'small' | 'normal' | 'big';
};

export class Star extends Component<StarProps> {
    render() {
        let size = '';
        if(this.props.size) {
            size = this.props.size;
        }
        else {
            const randomNum = Math.floor(Math.random() * (3) + 1);
            if(randomNum === 1) {
                size = 'small';
            } else if(randomNum === 2) {
                size = 'normal';
            } else {
                size = 'big';
            }
        }
        const classNames = classnames('star', 'star__' + size, this.props.className);

        return (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156.91 208.06' className={classNames} 
                style={{ 'top': this.props.top, 'right': this.props.right, 'bottom': this.props.bottom, 'left': this.props.left }}
            >
                <path d='M78.94 208.06v-.2C78.67 150.6 43.48 104.43.3 104.69H0C43.3 104.42 78.24 57.6 77.97.19V0 .2c.27 57.42 35.63 103.65 78.94 103.19h-.29c-43.2.46-77.95 47.21-77.68 104.49Z'/>
            </svg>
        );
    }
}

export default Star;