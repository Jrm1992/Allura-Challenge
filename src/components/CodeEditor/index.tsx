import React, { useState } from "react";
import Button from "../Button";

import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

interface IEditor {
  color: string;
  lang: string;
}

export default function CodeEditor({ color, lang }: IEditor) {
  const [code, setCode] = useState("");
  const [highlight, setHighlight] = useState(false);

  return (
    <div className="flex-col lg:ml-auto ">
      <div
        className={
          "rounded-lg lg:w-[768px] h-[366px] p-8 flex justify-center items-center lg:ml-auto"
        }
        style={{ backgroundColor: `${color}` }}
      >
        <div className="w-full h-full flex-wrap bg-black rounded-lg">
          {highlight ? (
            <div className="h-[302px]">
              <SyntaxHighlighter
                language={lang}
                wrapLongLines
                style={dracula}
                className="overflow-y-auto w-full h-full rounded-lg"
              >
                {code}
              </SyntaxHighlighter>
            </div>
          ) : (
            <textarea
              onChange={(e) => setCode(e.target.value)}
              value={code}
              className="w-full h-[302px] flex p-2 bg-[#2b2b2b] rounded-lg"
            />
          )}
        </div>
      </div>
      <Button
        Title="Visualizar com o highlight"
        className="mt-8 !bg-[#5081fb14]"
        onClick={() => setHighlight(!highlight)}
      />
    </div>
  );
}
