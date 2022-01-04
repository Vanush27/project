import React, {useCallback, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormComponent from "../EditTask/Form";



const AddTask = ({
                     onHide,
                     onSubmit
                 }) => {
    const [formData, setFormData] = useState([]);
    const handleChange = useCallback((e) => {
        const {value, name} = e.target;
        // debugger

        setFormData((prevData => {
            const newTask = {
                ...prevData,
                touched: true,
                id: Math.random(),
                [name]: value,
                status: "Active",
            };
            return newTask;
        }));

    }, []);
    return (
        <>
            <Modal
                size="lg"
                show={true}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                    />

                </Modal.Body>
                <Modal.Footer>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => onSubmit(formData)}
                    >
                        Add Task
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

export default AddTask;