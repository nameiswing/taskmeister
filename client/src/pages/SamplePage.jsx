// import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import css from "../styles/app.module.css";


const SamplePage = () => {

    const { app, text } = css;

    const { project } = useSelector( state => state );
    console.log(project)
    
    return (
        <div className="table-responsive">
            <Table bordered className={`${app} ${text} p-4`} style={{borderRadius: '.5rem'}}>
                <thead>
                    <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Project Name</th>
                        <th className="p-2">Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        project.map( (item, index) => (
                            <tr key={index} >
                                <td className="p-3" >{index + 1}</td>
                                <td className="p-3" >{item.name}</td>
                                <td className="p-3" >{item.summary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default SamplePage