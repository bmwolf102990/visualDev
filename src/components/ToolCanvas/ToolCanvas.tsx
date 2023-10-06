import React from "react";
import { BinarySearchVisualizer } from "../BinarySearchVisualizer/BinarySearchVisualizer";

export const ToolCanvas = ({ display, setDisplay }) => {


    return(
        <div className="col-span-4 mx-7 mb-2">
            {display === "binary search" && (
                <BinarySearchVisualizer />
            )}
        </div>
    );
};
