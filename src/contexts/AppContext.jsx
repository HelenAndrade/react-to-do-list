import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator, setCreator] = useState('Hélen Andrade');

    const [tasks, setTasks] = useState([
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
    ]);
    
    const addTask = (taskName) => {
        setTasks(currentState => {
            const task = {
                id: currentState.length + 1,
                name: taskName,
            };
            
            return [
                ...currentState,
                task,
            ];
        });
    };

    const editTask = (id, taskName) => {
        setTasks(currentState => {
            const editedTasks = currentState.map(task => {
                return task.id == id ? {
                    ...task,
                    name: taskName,
                } : task;
            });

            return [
                ...editedTasks,
            ]
        });
    };

    const removeTask = (idTask) => {
        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id != idTask);

            return [
                ...updatedTasks,
            ]
        })
    };

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