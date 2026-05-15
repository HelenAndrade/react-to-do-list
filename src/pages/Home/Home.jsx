import { FormCreateTask, TaskList } from "../../components";

import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.Home}>
            <FormCreateTask />
            <TaskList />
        </div>
    );
};

export { Home };