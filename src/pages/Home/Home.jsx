import { useState } from "react";

import { FormCreateTask, TaskList } from "../../components";

import style from './Home.module.css'

const Home = () => {
    const [tasks, setTasks] = useState([
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
    ]);

    return (
        <div className={style.Home}>
            <FormCreateTask setTasks={setTasks}/>
            <TaskList tasks={tasks}/>
        </div>
    );
};

export { Home };