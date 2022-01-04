import React, {useCallback, useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/Todo";
import "./styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

const Project = () => {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const [mockTasks, setMockTasks] = useState([]);

    const [editableTask, setEditableTask] = useState(mockTasks);

    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }


    const toggleStatusChange = useCallback((id) => {


        const localDataStatus = localStorage.getItem('data');   // data -string
        debugger

        let newData = JSON.parse(localDataStatus);
        console.log(newData.description);

         // newData.status;
            // .map((item) =>
            //             item.status);

        if (newData.status){
            return "Done";
        }
        // else {
        //    return  "Active";
        // }
           // return newData.status.toLowerCase() === "active" ? "Done" : "Active";

        // localStorage.setItem('data', JSON.stringify(localDataStatus));

        setMockTasks(newData.status);

    }, []);


    const handleDeleteTask = useCallback((id) => {

        const localDataDelete = localStorage.getItem('data');
        const newData = JSON.parse(localDataDelete).filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(newData));
        setMockTasks(newData)
    }, []);


    // const toggleStatusChange = useCallback((id) => {
    //
    //
    //
    //
    //     setMockTasks((prevData) => {
    //
    //         const copyData = [...prevData];
    //         const idx = prevData.findIndex(item => item.id === id);
    //         const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";
    //
    //         copyData[idx] = {
    //             ...copyData[idx],
    //             status
    //         }
    //
    //         return copyData;
    //     });
    //
    // }, []);

    const localStorageFUNC = (formData) => {
        const getLocalStorage = localStorage.getItem('data')
        if (getLocalStorage && getLocalStorage.length > 0) {
            const newTest = [...JSON.parse(getLocalStorage), formData]
            localStorage.setItem("data", JSON.stringify(newTest));
        } else {
            localStorage.setItem("data", JSON.stringify([formData]));
        }
    }

    const addTask = (formData) => {
        const {title, description, attachedTo} = formData;
        // debugger

        setMockTasks((prevData => {
            const copyData = [...prevData];
            copyData.push({
                id: Math.random(),
                title: title,
                description: description,
                status: "Active",
                attachedTo: attachedTo
            });
            return copyData;
        }));
        localStorageFUNC(formData)


        handleCloseAddTaskModal();
    }


    const editTask = (editableTask) => {
        const {title, description, attachedTo} = editableTask;
        setEditableTask((prevData => {
            const copyData = [...prevData];
            // copyData.push({
            //     id: Math.random(),
            //     title: title.value,
            //     description: description.value,
            //     status: "Active",
            //     attachedTo: attachedTo.value
            // });
            return copyData;
        }));
        handleCloseAddTaskModal();
    }


    useEffect(() => {
        const getLocalData = localStorage.getItem('data')
        if (JSON.parse(getLocalData)) {
            setMockTasks(JSON.parse(getLocalData))
        }
    }, [])

    return (
        <div className="project-container">
            <h1 className="heading1">
                Todo Project
            </h1>
            <Button
                onClick={handleOpenAddTaskModal}
            >
                Add Task
            </Button>

            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
            />

            {addTaskModalVisible && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
            />}

            {editableTask && <EditTask
                onHide={handleCloseAddTaskModal}
                onSubmit={editTask}
                // task={editableTask}
            />}
        </div>
    )
}
export default Project;