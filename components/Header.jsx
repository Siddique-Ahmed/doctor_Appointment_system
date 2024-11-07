import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const session = null;
  return (
    <div className="bg-secondary">
      <div className="flex justify-between container mx-auto px-3 py-2">
        <Link href={"/"}>
          <Image src={logo} height={30} width={30} alt="logo" />
        </Link>
        {session ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXklMjBiZyUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointments"}>
                  <MenubarItem>Appointments</MenubarItem>
                </Link>
                <MenubarSeparator />
                <MenubarItem>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href={"/signin"}>
            <Button variant="destructive">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
