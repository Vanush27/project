import React, {useCallback, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormComponent from "../EditTask/Form";


const EditTask = ({
                      onHide,
                      onSubmit,
                      task
                  }) => {
    const [editableTask, setEditableTask] = useState(task);

    const handleChange = useCallback((e) => {
        const {value, name} = e.target;
        setEditableTask((prevData => {
            const copyData = {...prevData};
            copyData[name] = {
                ...copyData[name],
                touched: true,
                value
            };
            return copyData;
        }));

    }, []);
    return (
        <>
            <Modal
                size="lg"
                show={false}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Task
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <FormComponent
                        editableTask={editableTask}
                        handleChange={handleChange}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => onSubmit(editableTask)}
                    >
                        Edit Task
                    </Button>
                    <Button
                        onClick={onHide}
                        variant="secondary"
                    >
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );

}

export default EditTask;