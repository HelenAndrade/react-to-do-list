import { Button, TYPE_BUTTON } from "../../../components";
import { useAppContext } from "../../../hooks";

import style from './TaskListItem.module.css'

const TaskListItem = (props) => {
    const { id, taskName } = props;

    const { removeTask } = useAppContext();

    return (
        <li className={style.TaskListItem}>
            {taskName}
            <Button 
                text="-" 
                type={TYPE_BUTTON.SECONDARY}
                onClick={() => removeTask(id)} />
        </li>
    );
};

export { TaskListItem };