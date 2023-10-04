import React from "react";
import { AiOutlineCopyright } from "react-icons/ai"
import { BsHeart } from "react-icons/bs";

export const Footer = () => {

    return(
        <footer className="text-sm text-center">
            <div>
                <span><AiOutlineCopyright className="inline"/> 2023 visualDev</span>
            </div>
            <span>developed with <BsHeart className="inline"/> by <a className="underline hover:text-pink" href="https://github.com/bmwolf102990">bryan wolf</a> & <a className="underline hover:text-pink" href="#">open source community</a></span>
        </footer>
    );
};
