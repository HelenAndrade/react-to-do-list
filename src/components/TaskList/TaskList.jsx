import { useAppContext } from "../../hooks";

import { TaskListItem } from "../../components";

import style from './TaskList.module.css'

const TaskList = () => {
    const { tasks } = useAppContext();

    return (
        <ul className={style.TaskList}>
            {!tasks.length && (
                <p>Não há tarefas cadastradas</p>
            )}
            {tasks.map(item => (
                <TaskListItem 
                    key={item.id} 
                    id={item.id} 
                    taskName={item.name}
                />
            ))}           
        </ul>
    );
};

export { TaskList };