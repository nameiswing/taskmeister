import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

const SamplePage = () => {

    const { project } = useSelector( state => state );
    console.log(project)
    
    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <TH>ID</TH>
                        <TH>Project Name</TH>
                        <TH>Summary</TH>
                    </tr>
                </thead>
                <tbody>
                    {
                        project.map( (item, index) => (
                            <tr key={index}>
                                <TD>{index + 1}</TD>
                                <TD>{item.name}</TD>
                                <TD>{item.summary}</TD>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default SamplePage

const TH = styled.th`
    padding: .25rem .5rem;
`
const TD = styled.td`
    padding: 1rem !important;
`