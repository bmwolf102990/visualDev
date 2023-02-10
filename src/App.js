import { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';

const App = () => {
    const [collection, setCollection] = useState([]);
    const [targetNum, setTargetNum] = useState(0);

    useEffect(() => {
        const handleCollectionGeneration = () => {
            let generatedCollection = []
            for(let i=1; i <= 1000; i++) {
                generatedCollection.push(i);
            }
            setCollection(generatedCollection);
        }
        handleCollectionGeneration()
    }, [])

    const handleSearch = () => {
        var start = 1;
        var end = collection.length;
        var timeout = 0;

        $(`#unit-${start}`).css("background-color","#dc3545");
        $(`#unit-${start}`).nextUntil(`#unit-${end}`).css("background-color","#0dcaf0");
        $(`#unit-${targetNum}`).css("background-color","#fd7e14");
        $(`#unit-${end}`).css("background-color","#dc3545");
        
        while(start <= end) {
            let startLimit = start;
            let endLimit = end;
            let mid = Math.floor((start + end) / 2);

            // $(`#unit-${mid}`).css("background-color","#6f42c1");

            if(mid === targetNum - 1 || mid + 1 === targetNum - 1 || mid - 1 === targetNum - 1) {
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${targetNum}`).css("background-color","#ffc107");
                }, timeout += 1000);
                return mid;
            }
            else if(mid < targetNum - 1) {
                start = mid + 1;
                startLimit = start;
                endLimit = end;
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${startLimit}`).css("background-color","#dc3545");
                    $(`#unit-${startLimit}`).nextUntil(`#unit-${endLimit}`).css("background-color","#0dcaf0");
                    $(`#unit-${targetNum}`).css("background-color","#fd7e14");
                    $(`#unit-${endLimit}`).css("background-color","#dc3545");
                }, timeout += 1000);
                continue;
            }
            else if(mid > targetNum - 1) {
                end = mid - 1;
                startLimit = start;
                endLimit = end;
                setTimeout(() => {
                    $(`.collection-unit`).css("background-color","#6c757d");
                    $(`#unit-${startLimit}`).css("background-color","#dc3545");
                    $(`#unit-${startLimit}`).nextUntil(`#unit-${endLimit}`).css("background-color","#0dcaf0");
                    $(`#unit-${targetNum}`).css("background-color","#fd7e14");
                    $(`#unit-${endLimit}`).css("background-color","#dc3545");
                }, timeout += 1000);
                continue;
            }
            return -1;
        }

    }
    
    return (
    <>
        {
        targetNum < 0 || targetNum > 1000 ?
        alert("INVALID TARGET: Please enter a number between 1 and 1000...")
        :null
        }
        <label>
            Target Number: <input id="target-input" type="number" min="1" max={collection.length} placeholder="1-1000" onChange={(e) => setTargetNum(e.target.value)} />
        </label>
        <button id="set-btn" type="submit" value="set" onClick={() => $(`.collection-unit`).css("background-color","#6c757d") && $(`#unit-${targetNum}`).css("background-color","#fd7e14")}>Mark Target Number</button>
        <button id="run-btn" type="submit" value="run" onClick={() => handleSearch()}>Run Binary Search</button>
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
