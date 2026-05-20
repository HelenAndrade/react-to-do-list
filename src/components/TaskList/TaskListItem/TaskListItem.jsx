import { useState } from "react";

import { Button, Loading, TextBox, TYPE_BUTTON } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from './TaskListItem.module.css'

const TaskListItem = (props) => {
    const { id, taskName } = props;

    const [isEditing, setIsEditing] = useState(false);

    const { loadingEdit, loadingDelete, editTask, removeTask } = useAppContext();

    const onBlurTask = (event) => {
        const taskName = event.currentTarget.value;

        editTask(id, taskName);

        setIsEditing(false);
    };

    const loadingIsEditing = loadingEdit == id;
    const loadingIsDeleting = loadingDelete == id;

    return (
        <li className={style.TaskListItem}>
            {(loadingIsEditing || isEditing) && (
                <TextBox 
                    defaultValue={taskName}
                    onBlur={onBlurTask}
                    autoFocus
                />
            )}

            {(!loadingIsEditing && !isEditing) && (
                <span onDoubleClick={() => setIsEditing(true)}>
                    {taskName}
                </span>
            )}

            {loadingIsEditing && (
                <Loading />
            )}

            <Button 
                text={loadingIsDeleting ? <Loading /> : "-"}
                type={TYPE_BUTTON.SECONDARY}
                onClick={() => removeTask(id)} />
        </li>
    );
};

export { TaskListItem };