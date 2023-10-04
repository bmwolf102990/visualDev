"use client"

import React from "react";
import Link from "next/link";
import {ScrollShadow} from "@nextui-org/react";
  
export const SideNav = ({ setDisplay }) => {

    const handleSetDisplay = (e) => {
        setDisplay(e.target.innerHTML.toLowerCase());
    }

    return (
        <ScrollShadow hideScrollBar isEnabled={false} className="h-[600px] grid grid-cols-1">
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
            <Link className="p-10 border-l-4 border-purple hover:bg-gradient-to-r from-purple to-black" href="#" onClick={handleSetDisplay}>Lorem Ipsum</Link>
        </ScrollShadow>
  );
}