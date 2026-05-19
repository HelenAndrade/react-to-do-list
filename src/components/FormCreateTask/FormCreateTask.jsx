import { useState } from 'react';

import { Button, TextBox } from '../../components';

import style from './FormCreateTask.module.css'

const FormCreateTask = (props) => {
const [taskName, setTaskName] = useState('');

    const { setTasks } = props;

    const onChangeTaskName = (event) => {
        setTaskName(event.currentTarget.value)
    };

    const addTask = (event) => {
        event.preventDefault();

        if(!taskName) {
            return;
        }

        setTasks(currentState => {
            const task = {
                id: currentState.length + 1,
                name: taskName,
            };
            return [
                ...currentState,
                task,
            ];
        });

        setTaskName('');
    };

    return (
        <form className={style.FormCreateTask} onSubmit={addTask} >
            <TextBox 
                value={taskName} 
                onChange={onChangeTaskName} 
            />
            <Button text="+"/>
        </form>
    );
};

export { FormCreateTask };