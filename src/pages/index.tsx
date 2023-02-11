import type { NextPage } from "next";
import { useState } from "react";

import CodeEditor from "../components/CodeEditor";
import Community from "../components/Community";
import Header from "../components/Header";
import Menu from "../components/Menu";

import clsx from "clsx";
import { Code, UsersThree } from "phosphor-react";

const Home: NextPage = () => {
  const [tabSelected, setTabSelected] = useState("Community");

  return (
    <div className="bg-[#051D3B] lg:max-w-[1440px] min-h-[100vh] m-auto">
      <Header />
      <div className="flex flex-col lg:flex-row ">
        <Menu Title="MENU" className="mx-8 lg:flex hidden">
          <>
            <button
              className="flex items-center gap-4"
              onClick={() => setTabSelected("CodeEditor")}
            >
              <div
                className={clsx(
                  "w-12 h-12 rounded-2xl bg-[#5081FB16] disabled:bg-white text-sm font-extrabold justify-center items-center flex",
                  { ["bg-blue-500"]: tabSelected === "CodeEditor" }
                )}
              >
                <Code size={24} color="#fafafa" weight="bold" />
              </div>
              Editor de codigo
            </button>
            <button
              className="flex items-center gap-4"
              onClick={() => setTabSelected("Community")}
            >
              <div
                className={clsx(
                  "w-12 h-12 rounded-2xl bg-[#5081FB16] disabled:bg-white text-sm font-extrabold justify-center items-center flex",
                  { ["bg-blue-500"]: tabSelected === "Community" }
                )}
              >
                <UsersThree size={24} color="#fafafa" weight="bold" />
              </div>
              Comunidade
            </button>
          </>
        </Menu>
        {tabSelected == "Community" ? <Community /> : <CodeEditor />}
      </div>
    </div>
  );
};

export default Home;
