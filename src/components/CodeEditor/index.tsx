import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import { useGlobalContext } from "../../context";
import Button from "../Button";
import MyProjectMenu from "./ProjectMenu";

export default function CodeEditor() {
  const [highlight, setHighlight] = useState(false);

  const { postCode, setPostCode, user } = useGlobalContext();

  if (!user) {
    return (
      <div className="w-full h-[400px] justify-center items-center flex">
        Faca login para postar seus codigos
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:ml-auto ">
      <div className="">
        <div
          className={
            "rounded-lg lg:w-[768px] h-[392px] p-8 mx-2 flex justify-center items-center lg:ml-auto"
          }
          style={{ backgroundColor: `${postCode.BgColor}` }}
        >
          <div className="w-full h-full flex-wrap bg-[#282A36] rounded-lg">
            <div className="flex justify-end pr-6 w-full p-2 gap-1 bg-[#282A36] rounded-lg">
              <div className="w-[10px] h-[10px] rounded bg-yellow-600" />
              <div className="w-[10px] h-[10px] rounded bg-green-600" />
              <div className="w-[10px] h-[10px] rounded bg-red-600" />
            </div>
            {highlight ? (
              <div className="h-[302px] ">
                <SyntaxHighlighter
                  language={postCode.Language}
                  wrapLongLines
                  style={dracula}
                  className="overflow-y-auto w-full h-full text-xs rounded-lg scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-700"
                >
                  {postCode.Code}
                </SyntaxHighlighter>
              </div>
            ) : (
              <textarea
                onChange={(e) =>
                  setPostCode((prevState: any) => {
                    return {
                      ...prevState,
                      Code: e.target.value,
                    };
                  })
                }
                value={postCode.Code}
                className="w-full h-[302px] outline-none flex p-2 bg-[#282A36] text-xs rounded-lg scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-700"
              />
            )}
          </div>
        </div>
        <Button
          Title={highlight ? "Editar" : "Visualizar com o highlight"}
          className="mt-8 !bg-[#5081fb14]"
          onClick={() => setHighlight(!highlight)}
        />
      </div>
      <MyProjectMenu />
    </div>
  );
}
