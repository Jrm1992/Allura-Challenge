import Image from "next/image";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/hljs/dracula";

import { db } from "../../config/firebase";

import { doc, updateDoc } from "firebase/firestore";
import { Heart } from "phosphor-react";

export interface ICodeCards {
  children: string;
  Language: string;
  Title: string;
  Description: string;
  BgColor: string;
  Likes: number;
  Author: {
    Name: string;
    avatarURL: string;
  };
  id: string;
}

export default function CodeCards({
  children,
  Language,
  Title,
  Description,
  BgColor,
  Likes,
  Author,
  id,
}: ICodeCards) {
  const [liked, setLiked] = useState(Likes);
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState("#ffff");
  async function handleLike() {
    const washingtonRef = doc(db, "Codes", id);
    await updateDoc(washingtonRef, {
      Likes: Likes + 1,
    });
    setLiked(liked + 1);
    setDisable(true);
    setColor("#ff0000");
  }

  return (
    <div className="lg:w-[520px] w-[310px] lg:m-auto">
      <div className="p-6 rounded-lg" style={{ backgroundColor: `${BgColor}` }}>
        <div className="flex justify-end pr-6 w-full p-2 gap-1 bg-[#282A36] rounded-t-lg">
          <div className="w-[10px] h-[10px] rounded bg-yellow-600" />
          <div className="w-[10px] h-[10px] rounded bg-green-600" />
          <div className="w-[10px] h-[10px] rounded bg-red-600" />
        </div>
        <div className="rounded-b-lg overflow-hidden">
          <SyntaxHighlighter
            language={Language}
            wrapLongLines
            style={dracula}
            className="h-[288px] scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-700 p-2"
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex flex-col m-6">
        <span className="font-bold text-base">{Title}</span>
        <span className="text-sm">{Description}</span>
        <div className="flex justify-between mt-6">
          <button
            className="flex gap-2 items-center cursor-pointer disabled:cursor-default"
            onClick={handleLike}
            disabled={disable}
          >
            <Heart size={22} color={color} weight={"fill"} />
            {liked}
          </button>
          <div className="flex items-center gap-2">
            <Image
              src={Author.avatarURL}
              alt={Author.Name}
              width={32}
              height={32}
              className="rounded-full"
            />
            {Author.Name}
          </div>
        </div>
      </div>
    </div>
  );
}
