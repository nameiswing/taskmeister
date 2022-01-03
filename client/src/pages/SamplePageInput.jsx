import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatchActions } from "../state-manager/dispatchActions"



const SamplePageInput = () => {

    const project = useSelector( state => state.project );
    const { newProject } = useDispatchActions();

    const [projectItem, setProjectItem] = useState({ name: '', summary: ''});

    const handleChange = (e) => {
        // e.preventDefault();
        setProjectItem({ ...projectItem, [e.target.name]: e.target.value });
    }
    
    return (
    <StyledForm 
        onSubmit={ 
            e => { 
                e.preventDefault(); 
                newProject(projectItem);
            }
        }
        className="p-4 my-5"
    >
            <Form.Group className="mb-3" >
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" name="name" value={project.name} onChange={handleChange} required />
            </Form.Group> 

            <Form.Group className="mb-3">
                <Form.Label>Summary</Form.Label>
                <Form.Control type="text" name="summary" value={project.summary} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-">
                Submit
            </Button>
        </StyledForm>
    );
};

export default SamplePageInput;

const StyledForm = styled(Form)`
    box-shadow: 0 .125rem .25rem rgba(0,0,0,0.2);
    border-radius: .25rem;
`