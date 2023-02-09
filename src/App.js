import { useState, useEffect } from 'react'
import $ from 'jquery'
import './App.css';

function App() {
    const [collection, setCollection] = useState([])
    const [targetNum, setTargetNum] = useState(0)

    useEffect(() => {
        const handleCollectionGeneration = () => {
            let generatedCollection = []
            for(let i=1; i <= 1080; i++) {
                generatedCollection.push(i);
            }
            setCollection(generatedCollection);
        }
        handleCollectionGeneration()
    }, [])

    const handleSearch = () => {
        let start = 1;
        let end = collection.length;
        let timeout = 0;
        
        while(start <= end) {
            let mid = Math.floor((start + end) / 2);

            if(collection[mid] === targetNum - 1) {
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${targetNum}`).css("background-color","#ffc107");
                }, timeout += 750);
            }
            else if(collection[mid] < targetNum - 1) {
                start = mid + 1;
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${targetNum}`).css("background-color","#20c997");
                    $(`#unit-${mid}`).css("background-color","#0dcaf0");
                }, timeout += 750);
                continue;
            }
            else if(collection[mid] > targetNum - 1) {
                end = mid - 1;
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${targetNum}`).css("background-color","#20c997");
                    $(`#unit-${mid}`).css("background-color","#0dcaf0");
                }, timeout += 750);
                continue;
            }
        }

    }
    
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
        <button type="submit" value="set" onClick={() => $(`.collection-unit`).css("background-color","#6c757d") && $(`#unit-${targetNum}`).css("background-color","#20c997")}>Mark Target Number</button>
        <button type="submit" value="run" onClick={() => handleSearch()}>Run Binary Search</button>
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
