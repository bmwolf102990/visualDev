import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import $ from 'jquery';

export const BinarySearchVisualizer = () => {
    const [collectionSize, setCollectionSize] = useState(506);
    const [collection, setCollection]: any = useState([]);
    const [target, setTarget] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const buildCollection = () => {
            const generatedCollection: number[] = []
            
            for(let i=1; i <= collectionSize; i++) {
                generatedCollection.push(i);
            }
            
            setCollection(generatedCollection);
        }
        buildCollection();

        const handleTargetMark = () => {
            $(`.collection-unit`).css("background-color","#374151");
            $(`#unit-${target}`).css("background-color","#ea580c");
        }
        handleTargetMark();
    }, [collectionSize, target])

    const handleSearch = () => {
        if(target === 0) {
            alert("you must first choose a search target by clicking on a unit in the collection");
        }
        else {
            setIsDisabled(true);
            var startLimit = 1;
            var endLimit = collection.length;
            var timeout = 0;

            $(`#unit-${startLimit}`).css("background-color","#dc2626");
            $(`#unit-${startLimit}`).nextUntil(`#unit-${endLimit}`).css("background-color","#2563eb");
            $(`#unit-${target}`).css("background-color","#eab308");
            $(`#unit-${endLimit}`).css("background-color","#dc2626");
            
            while(startLimit <= endLimit) {
                let start = startLimit;
                let end = endLimit;
                let mid = Math.floor((start + end) / 2);

                if (start === target) {
                    setTimeout(() => {
                        $(`.collection-unit`).css("background-color","#374151");
                        $(`#unit-${target}`).css("background-color","#22c55e");
                        setIsDisabled(false);
                    }, timeout += 1000);
                    return start;
                }
                else if (end === target) {
                    setTimeout(() => {
                        $(`.collection-unit`).css("background-color","#374151");
                        $(`#unit-${target}`).css("background-color","#22c55e");
                        setIsDisabled(false);
                    }, timeout += 1000);
                    return end;
                }
                else if(mid === target - 1 || mid + 1 === target - 1 || mid - 1 === target - 1) {
                    setTimeout(() => {
                        $(`.collection-unit`).css("background-color","#374151");
                        $(`#unit-${target}`).css("background-color","#22c55e");
                        setIsDisabled(false);
                    }, timeout += 1000);
                    return mid;
                }
                else if(mid < target - 1) {
                    startLimit = mid + 1;
                    start = startLimit;
                    end = endLimit;
                    setTimeout(() => {
                        $(`.collection-unit`).css("background-color","#374151");
                        $(`#unit-${start}`).css("background-color","#dc2626");
                        $(`#unit-${start}`).nextUntil(`#unit-${end}`).css("background-color","#2563eb");
                        $(`#unit-${target}`).css("background-color","#eab308");
                        $(`#unit-${end}`).css("background-color","#dc2626");
                    }, timeout += 1000);
                    continue;
                }
                else if(mid > target - 1) {
                    endLimit = mid - 1;
                    start = startLimit;
                    end = endLimit;
                    setTimeout(() => {
                        $(`.collection-unit`).css("background-color","#374151");
                        $(`#unit-${start}`).css("background-color","#dc2626");
                        $(`#unit-${start}`).nextUntil(`#unit-${end}`).css("background-color","#2563eb");
                        $(`#unit-${target}`).css("background-color","#eab308");
                        $(`#unit-${end}`).css("background-color","#dc2626");
                    }, timeout += 1000);
                    continue;
                }
                return -1;
            }
        }

    }


    return(
        <>
            <div className="flex flex-wrap items-center justify-center my-1 h-[55%]">
            {collection.map((unit) => <div key={unit} id={`unit-${unit}`} className="collection-unit bg-[#374151] w-[22px] h-[22px] rounded m-1" onClick={() => setTarget(Number(unit))}></div>)}
            </div>
            <div className="grid grid-cols-2 items-center self-center h-[45%]">
                <Button
                    className="hover:bg-pink hover:border-pink hover:outline-pink hover:text-black mx-10 p-7"
                    color="default"
                    variant="bordered"
                    onClick={handleSearch}
                    isDisabled={isDisabled}
                >
                    Run
                </Button>
                <Button
                    className="hover:bg-purple hover:border-purple hover:outline-purple hover:text-black mx-10 p-7"
                    color="default"
                    variant="bordered"
                    onClick={() => setTarget(0)}
                    isDisabled={isDisabled}
                >
                    Reset
                </Button>
            </div>
        </>
    );
};
