import { useState, useEffect } from 'react'
import './App.css';

function App() {
    const [collection, setCollection] = useState([])
    const [targetNum, setTargetNum] = useState(1)
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
    console.log(targetNum)
    return (
    <>
        <label>
            Target Number: <input type="number" min="1" max={collection.length} placeholder="1-1080" onChange={(e) => setTargetNum(e.target.value)} />
        </label>
        {
        targetNum < 1 || targetNum > 1080 || targetNum === "" ?
        alert("INVALID TARGET: Please enter a number between 1 and 1080")
        :null
        }
        <button type="submit" value="set">Set Target Number</button>
        <button type="submit" value="run">Run Binary Search</button>
        <div className="flex-container">
        {
        collection ?
        collection.map((unit) => <div key={unit} className={`collection-unit unit-${unit}`}></div>)
        :null
        }
        </div>
    </>
    );
}

export default App;
