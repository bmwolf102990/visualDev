"use client"
import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return(
        <Navbar className="justify-start" onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
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
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sponsor
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href="#"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
            ))}
            </NavbarMenu>
        </Navbar>
    );
};