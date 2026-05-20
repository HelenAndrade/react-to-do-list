import { useAppContext } from "../../hooks";

import { Loading, TaskListItem } from "../../components";

import style from './TaskList.module.css'

const TaskList = () => {
    const { tasks, loadingFetch } = useAppContext();

    return (
        <ul className={style.TaskList}>
            {loadingFetch && (
                <p>
                    Carregando... 
                    <Loading />
                </p>
            )}

            {!loadingFetch && !tasks.length && (
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