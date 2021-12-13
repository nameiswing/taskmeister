import { useDataContext } from './context/ContextProvider';
import classes from "./styles/app.module.css";

const App = () => {

    const { state } = useDataContext();
    console.log(state)
    
    return (
        <div>
            <p className={classes.app}>{state}</p>
        </div>
    )
}

export default App
