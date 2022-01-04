import React, {memo} from "react";
import Task from "../Task";
import "./styles.css";

const Todo = ({
                  mockTasks,
                  handleDeleteTask,
                  toggleStatusChange

              }) => {
    // debugger

    return (
        <div className="tasks-wrapper">
            {mockTasks.length > 0 && mockTasks.map(task => (
                <Task
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                    {...task}
                />
            ))}
        </div>
    )
}

export default memo(Todo);