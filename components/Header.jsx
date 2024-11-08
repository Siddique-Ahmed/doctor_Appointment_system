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
import { auth, signOut } from "../auth";

const Header = async () => {
  const session = await auth();
  console.log("session==>>", session);

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
                  <AvatarImage src={session?.user?.image} />
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
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button className="w-full" type="submit" variant="outline">
                    Logout
                  </Button>
                </form>
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
