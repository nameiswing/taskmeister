import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "./state-manager/action-creators/project-creator"
import { app, text } from "./styles/app.module.css";

const App = () => {

    const { project } = useSelector( state => state );
    const AC = bindActionCreators(actionCreators, useDispatch());
    const { newProject } = AC;
    
    console.log(project);
    
    return (
        <div className={`${app} ${text}`}>
            <p>{project}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, repudiandae.</p>
            <button onClick={ () => newProject("Hello!")}>
                Add Project
            </button>
        </div>
    )
}

export default App
