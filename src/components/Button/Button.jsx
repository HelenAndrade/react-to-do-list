import { TYPE_BUTTON } from "./constants"

import style from './Button.module.css'

const Button = (props) => {
    const { text, type = TYPE_BUTTON.PRIMARY, ...otherProps } = props;

    return (
        <button className={style.Button} type = {type} {...otherProps}>
            {text}
        </button>
    );
};

export { Button };