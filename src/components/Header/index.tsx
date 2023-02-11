import Image from "next/image";
import React, { useEffect } from "react";

import Logo from "../../../public/Logo.svg";
import { auth } from "../../config/firebase";
import { useGlobalContext } from "../../context";
import SignIn from "../SignIn";

import { signOut } from "firebase/auth";
import { List, MagnifyingGlass, SignOut } from "phosphor-react";

export default function Header() {
  const { user, setUser } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((response) => setUser(response));
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex justify-between p-8 items-center">
      <div>
        <Logo />
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar por algo"
          className="px-4 rounded bg-[#ffffff16] text-slate-50 h-12 hidden lg:flex lg:w-[752px] outline-none"
        />
        <MagnifyingGlass
          size={24}
          color="#fafafa"
          weight="bold"
          className="flex lg:hidden ml-10"
        />
      </div>
      <List
        size={24}
        color="#fafafa"
        weight="bold"
        className="flex lg:hidden"
      />
      {user ? (
        <div className="text-slate-50">
          <div className="flex justify-center items-center gap-4">
            <Image
              src={user.photoURL as string}
              alt="Avatar Author"
              width={36}
              height={36}
              className="hidden lg:flex rounded-full"
            />
            <span className="text-sm">{user.displayName}</span>
            <SignOut
              size={20}
              onClick={handleSignOut}
              className="cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex">
          <SignIn setUser={setUser} user={user} />
        </div>
      )}
    </div>
  );
}
