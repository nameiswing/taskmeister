import { useDataContext } from './context/ContextProvider';
import { app, text } from "./styles/app.module.css";

const App = () => {

    const { state } = useDataContext();
    console.log(state)
    
    return (
        <div className={`${app} ${text}`}>
            <p>{state}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, repudiandae.</p>
        </div>
    )
}

export default App
