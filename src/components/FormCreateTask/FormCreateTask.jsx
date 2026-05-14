import { Button, TextBox } from '../../components';

import style from './FormCreateTask.module.css'

const FormCreateTask = () => {
    return (
        <form className={style.FormCreateTask} >
            <TextBox />
            <Button text="+"/>
        </form>
    );
};

export { FormCreateTask };