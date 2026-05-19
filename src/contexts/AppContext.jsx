
import { useEffect, useState } from 'react';

import { api } from '../services';
import { AppContext } from './AppContext';

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator] = useState('Hélen Andrade');

    const [tasks, setTasks] = useState([]);

    
    
    const addTask = async (taskName) => {
        const { data: task } = await api.post('/tasks', {
            name: taskName,
        });

        setTasks(currentState => {
            return [
                ...currentState,
                task,
            ];
        });
    };

    const editTask = async (idTask, taskName) => {
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
    };

    const removeTask = async (idTask) => {
        await api.delete(`tasks/${idTask}`);

        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id != idTask);

            return [
                ...updatedTasks,
            ]
        })
    };

    useEffect(() => {
        const loadTasks = async () => {
            const { data = [] } = await api.get('/tasks');

            setTasks([
            ...data,
            ])
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
        }}>
            {children}
        </AppContext.Provider>
    );
};