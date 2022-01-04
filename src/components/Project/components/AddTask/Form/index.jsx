import React from "react";
import {Form} from "react-bootstrap";
import {formDataAddTask} from "../../../data/mockData";

const FormComponent = ({formData, handleChange}) => {
    return (
        <Form>
            {formDataAddTask.map((input, index) => {
                return <Form.Group className="mb-3" key={index}>
                    <Form.Label> {input.label}</Form.Label>

                    <Form.Control
                        type="text"
                        name={input.name}
                        value={input.value}
                        onChange={handleChange}
                    />
                </Form.Group>
            })}
        </Form>
    );

}

export default FormComponent;

