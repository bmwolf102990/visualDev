"use client"
import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { BsHeartFill, BsHouse } from "react-icons/bs";

export const TopNav = ({ display, setDisplay }) => {

    const handleSetDisplay = () => {
        setDisplay("home");
    }

    return(
        <Navbar maxWidth="full">
            <NavbarBrand>
                <Image 
                    src="/visualdev.svg"
                    alt="visualDev Logo"
                    width={75}
                    height={25}
                    priority
                />
                <p className="font-thin text-xl">visual</p>
                <p className="font-medium text-xl">Dev</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    {display !== "home" && (
                        <Button as={Link} color="default" variant="flat" className="mx-3" onClick={handleSetDisplay}>
                            <BsHouse fill="#ffffff" />
                            Home
                        </Button>
                    )}
                    <Button as={Link} color="default" href="#" variant="flat">
                        <BsHeartFill fill="#ec4899" />
                        Sponsor
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
