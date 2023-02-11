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
        handleCollectionGeneration();

        const handleTargetMark = () => {
            $(`.collection-unit`).css("background-color","#6c757d");
            $(`#unit-${targetNum}`).css("background-color","#fd7e14");
        }
        handleTargetMark();
    }, [targetNum])

    const handleSearch = () => {
        if(targetNum === 0) {
            alert("you must first choose a target by clicking on a unit in the collection");
        }
        else {
            $(`#run`).attr("disabled",true);
            $(`#clear`).attr("disabled",true);
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
                        $(`#run`).attr("disabled",false);
                        $(`#clear`).attr("disabled",false);
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

    }

    return (
    <>
        <div className="d-flex flex-wrap align-items-center justify-content-start mx-2 my-2">
            <button id="run" className="btn btn-outline-light  mx-1" type="submit" onClick={handleSearch}>Run Binary Search</button>
            <button id="clear" className="btn btn-outline-info mx-1 px-5" type="submit" onClick={() => setTargetNum(0)}>Clear</button>
            <p className="mx-5 mt-3">Click on a box in the collection to select it as your search target, then click the "Run Binary Search" button</p>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
            {
            collection ?
            collection.map((unit) => <div key={unit} title={unit} id={`unit-${unit}`} className="collection-unit" onClick={(e) => setTargetNum(Number(e.target.title))}></div>)
            :null
            }
        </div>
    </>
    );
}

export default App;
