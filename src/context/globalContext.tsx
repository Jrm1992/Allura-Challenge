import React, { useState } from "react";

import { User } from "@firebase/auth-types";

export interface IGlobalContextProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<boolean>;
  user: User | undefined | null;
  setUser: React.Dispatch<IGlobalContextProps["user"]>;
  postCode: {
    Code: string;
    Language: string;
    Title: string;
    Description: string;
    BgColor: string;
    Likes: number;
    Author: {
      Name: string | null | undefined;
      avatarURL: string | null | undefined;
    };
  };
  setPostCode: React.Dispatch<IGlobalContextProps["postCode"]>;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  menuOpen: false,
  user: {},
  postCode: {
    Code: "",
    Language: "javascript",
    Title: "",
    Description: "",
    BgColor: "#0058ff",
    Likes: 0,
    Author: {
      Name: "",
      avatarURL: "",
    },
  },
});

export const GlobalContextProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [postCode, setPostCode] = useState({
    Code: "",
    Language: "javascript",
    Title: "",
    Description: "",
    BgColor: "#0058ff",
    Likes: 0,
    Author: {
      Name: user?.displayName,
      avatarURL: user?.photoURL,
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        postCode,
        setPostCode,
        menuOpen,
        setMenuOpen,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
