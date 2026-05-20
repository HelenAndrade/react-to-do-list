
import { useEffect, useState } from 'react';

import { api } from '../services';
import { AppContext } from './AppContext';

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator] = useState('Hélen Andrade');

    const [tasks, setTasks] = useState([]);

    const [loadingFetch, setLoadingFetch] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);
    const [loadingEdit, setLoadingEdit] = useState(null);
    const [loadingDelete, setLoadingDelete] = useState(null);
    
    const addTask = async (taskName) => {
        setLoadingCreate(true);

        const { data: task } = await api.post('/tasks', {
            name: taskName,
        });

        setTasks(currentState => {
            return [
                ...currentState,
                task,
            ];
        });

        setLoadingCreate(false);
    };

    const editTask = async (idTask, taskName) => {
        setLoadingEdit(idTask);

        const { data: editedTask } = await api.put(`tasks/${idTask}`, {
            name: taskName,
        });

        setTasks(currentState => {
            const editedTasks = currentState.map(task => {
                return task.id == idTask ? {
                    ...task,
                    name: editedTask.name,
                } : task;
            });

            return [
                ...editedTasks,
            ]
        });

        setLoadingEdit(null);
    };

    const removeTask = async (idTask) => {
        setLoadingDelete(idTask);

        await api.delete(`tasks/${idTask}`);

        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id != idTask);

            return [
                ...updatedTasks,
            ]
        });

        setLoadingDelete(null);
    };

    useEffect(() => {
        const loadTasks = async () => {
            setLoadingFetch(true);
            const { data = [] } = await api.get('/tasks');

            setTasks([
            ...data,
            ]);

            setLoadingFetch(false);
        };
        
        loadTasks();
    }, []);

    return (
        <AppContext.Provider value={{
            creator,
            tasks,
            addTask,
            removeTask,
            editTask,
            loadingFetch,
            loadingCreate,
            loadingEdit,
            loadingDelete,
        }}>
            {children}
        </AppContext.Provider>
    );
};