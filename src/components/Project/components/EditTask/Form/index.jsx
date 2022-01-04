import React from "react";
import { Form } from "react-bootstrap";
import { formDataAddTask } from "../../../data/mockData";


const FormComponent = ({ editableTask, handleChange }) => {

    return (
        <Form>
            {formDataAddTask.map((input, index) => {
                return <Form.Group className="mb-3" key={index}>
                    <Form.Label> {input.label}</Form.Label>
                    <Form.Control
                        type="text"
                        name={input.name}
                        // label={editableTask[input.name]}
                        onChange={handleChange}
                    />
                </Form.Group>
            })}
        </Form>
    );
}

export default FormComponent;