import { Button, TYPE_BUTTON } from "../../../components";

import style from './TaskListItem.module.css'

const TaskListItem = (props) => {
    const { taskName } = props;
    return (
        <li className={style.TaskListItem}>
            {taskName}
            <Button text="-" type={TYPE_BUTTON.SECONDARY} />
        </li>
    );
};

export { TaskListItem };