import { useDataContext } from './context/ContextProvider'

const App = () => {

    const { state } = useDataContext();
    console.log(state)
    
    return (
        <div>
            <p>{state}</p>
        </div>
    )
}

export default App
