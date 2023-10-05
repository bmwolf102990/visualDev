
import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";

export const BinarySearchVisualizer = () => {
    const [collection, setCollection]: any = useState([]);
    // const [targetNum, setTargetNum] = useState(0);

    useEffect(() => {
        const buildCollection = () => {
            const generatedCollection: number[] = []
            
            for(let i=1; i <= 500; i++) {
                generatedCollection.push(i);
            }
            
            setCollection(generatedCollection);
        }
        buildCollection();

        // const handleTargetMark = () => {
        //     $(`.collection-unit`).css("background-color","#6c757d");
        //     $(`#unit-${targetNum}`).css("background-color","#fd7e14");
        // }
        // handleTargetMark();
    }, [])

    return(
        <>
            <div className="flex flex-wrap items-center justify-center my-1">
            {collection.map((unit) => <div key={unit} id={`unit-${unit}`} className="collection-unit bg-gray w-[20px] h-[20px] rounded m-1"></div>)}
            </div>
            <div className="grid grid-cols-3 mt-32">
                <Button
                    className="hover:bg-pink hover:border-pink hover:outline-pink hover:text-black mx-10 p-3"
                    color="default"
                    variant="bordered"
                >
                    Start
                </Button>
                <div className="text-center">
                    <Input
                        className=""
                        type="number"
                        variant="flat"
                        min={50}
                        max={500}
                        step={50}
                    />
                    <span>Collection Size</span>
                </div>
                <Button
                    className="hover:bg-purple hover:border-purple hover:outline-purple hover:text-black mx-10 p-3"
                    color="default"
                    variant="bordered"
                >
                    Reset
                </Button>
            </div>
        </>
    );
};
