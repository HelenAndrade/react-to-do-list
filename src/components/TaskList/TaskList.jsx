import { TaskListItem } from "../../components";

import style from './TaskList.module.css'

const TaskList = (props) => {
    const {tasks} = props;
    return (
        <ul className={style.TaskList}>
            {tasks.map(item => <TaskListItem key={item.id} taskName={item.name}/>)}           
        </ul>
    );
};

export { TaskList };