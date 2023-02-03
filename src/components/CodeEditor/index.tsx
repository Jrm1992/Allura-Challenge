import React, { useState } from "react";
import Button from "../Button";

import hljs from 'highlight.js';
import clsx from "clsx";


import "highlight.js/styles/base16/dracula.css";

export default function CodeEditor({color, lang}: any) {
  const [code, setCode] = useState('');
  const [highlight, setHighlight] = useState(false);

  const myHtml = hljs.highlightAuto(code).value;

  return (
    <div className="flex-col lg:ml-auto ">
      <div className={"rounded-lg lg:w-[768px] h-[366px] p-8 flex justify-center items-center lg:ml-auto"} style={{backgroundColor: `${color}`}}>
        <div className="w-full h-full flex-wrap bg-black rounded-lg">
          <div
            className={clsx("w-full h-[94%] flex text-xs whitespace-pre-wrap bg-transparent mt-4 outline-none p-2 scrollbar-thin scrollbar-track-black", {
              ["hidden"]: highlight === false,
            })}
          >
            <code className={lang} dangerouslySetInnerHTML={{ __html: myHtml }} />
          </div>
          <textarea
            onChange={(e) => setCode(e.target.value)}
            value={code}
            className={clsx("w-full h-[94%] flex text-xs bg-transparent mt-4 outline-none p-2 scrollbar-thin scrollbar-track-black", {
              ["hidden"]: highlight === true,
            })}
          />
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
