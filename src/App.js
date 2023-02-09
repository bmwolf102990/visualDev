import { useState } from 'react'
import './App.css';

function App() {
    const [collection, setCollection] = useState([])
    const [collectionSize, setCollectionSize] = useState(0)
    const [targetNum, setTargetNum] = useState(0)
    const [runStatus, setRunStatus] = useState(false)

    return (
    <>
        <label>
            Set Collection Size: <input type="number" min="0" max="500" />
        </label>
        <label>
            Set Target Number: <input type="number" min="1" max="500" />
        </label>
        <button type="submit" value="Set Collection & Target" />
        <button type="submit" value="Run Binary Search" />
    </>
    );
}

export default App;
