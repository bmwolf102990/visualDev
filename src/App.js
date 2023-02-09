import { useState, useEffect } from 'react'
import $ from 'jquery'
import './App.css';

function App() {
    const [collection, setCollection] = useState([])
    const [targetNum, setTargetNum] = useState(0)

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

    const handleSearch = () => {}
    
    return (
    <>
        {
        targetNum < 0 || targetNum > 1080 ?
        alert("INVALID TARGET: Please enter a number between 1 and 1080...")
        :null
        }
        <label>
            Target Number: <input type="number" min="1" max={collection.length} placeholder="1-1080" onChange={(e) => setTargetNum(e.target.value)} />
        </label>
        <button type="submit" value="set" onClick={() => $(`.collection-unit`).css("background-color","#6c757d") && $(`#unit-${targetNum}`).css("background-color","#ffc107")}>Mark Target Number</button>
        <button type="submit" value="run" onClick={handleSearch}>Run Binary Search</button>
        <div className="flex-container">
            {
            collection ?
            collection.map((unit) => <div key={unit} id={`unit-${unit}`} className="collection-unit"></div>)
            :null
            }
        </div>
    </>
    );
}

export default App;
