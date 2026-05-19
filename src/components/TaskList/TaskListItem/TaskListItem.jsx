import { useState } from "react";

import { Button, TextBox, TYPE_BUTTON } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from './TaskListItem.module.css'

const TaskListItem = (props) => {
    const { id, taskName } = props;

    const [isEditing, setIsEditing] = useState(false);

    const { editTask, removeTask } = useAppContext();

    return (
        <li className={style.TaskListItem}>
            {isEditing && (
                <TextBox 
                    defaultValue={taskName}
                    onChange={event => editTask(id, event.currentTarget.value)} 
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                />
            )}
            {!isEditing && (
                <span onDoubleClick={() => setIsEditing(true)}>
                    {taskName}
                </span>
            )}
            <Button 
                text="-" 
                type={TYPE_BUTTON.SECONDARY}
                onClick={() => removeTask(id)} />
        </li>
    );
};

export { TaskListItem };