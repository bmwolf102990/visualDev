import { useState, useEffect } from 'react'
import './App.css';

function App() {
    const [collection, setCollection] = useState([])
    const [targetNum, setTargetNum] = useState(0)
    const [runStatus, setRunStatus] = useState(false)

    useEffect(() => {
        const handleCollectionGeneration = () => {
            let generatedCollection = []
            for(let i=1; i < 1081; i++) {
                generatedCollection.push(i);
            }
            setCollection(generatedCollection);
        }
        handleCollectionGeneration()
    }, [])
    return (
    <>
        <div className="flex-container">
            {
                collection ?
                collection.map((unit) => <div key={unit} className="collection-unit"></div>)
                :null
            }
        </div>
    </>
    );
}

export default App;
