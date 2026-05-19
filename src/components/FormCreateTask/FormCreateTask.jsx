import { useState } from 'react';

import { Button, TextBox } from '../../components';
import { useAppContext } from '../../hooks';

import style from './FormCreateTask.module.css'

const FormCreateTask = () => {
    const { addTask } = useAppContext();
    
    const [taskName, setTaskName] = useState('');

    const onChangeTaskName = (event) => {
        setTaskName(event.currentTarget.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        if(!taskName) {
            return;
        }

        addTask(taskName);

        setTaskName('');
    };

    return (
        <form className={style.FormCreateTask} onSubmit={submitForm} >
            <TextBox 
                value={taskName} 
                onChange={onChangeTaskName} 
            />
            <Button text="+"/>
        </form>
    );
};

export { FormCreateTask };