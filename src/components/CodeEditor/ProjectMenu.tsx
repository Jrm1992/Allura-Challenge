import React from "react";

import { db } from "../../config/firebase";
import { useGlobalContext } from "../../context";
import Button from "../Button";
import Input from "../Input";
import Menu from "../Menu";

import { addDoc, collection } from "firebase/firestore";

export default function MyProjectMenu() {
  const { postCode, setPostCode } = useGlobalContext();

  async function handleSaveProject(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    await addDoc(collection(db, "Codes"), postCode);
    setPostCode((prevState: any) => {
      return {
        ...prevState,
        Code: "",
        Language: "javascript",
        Title: "",
        Description: "",
        Likes: 0,
      };
    });
  }

  return (
    <form className="flex flex-col gap-4 mx-8">
      <Menu Title="SEU PROJETO">
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Nome do seu projeto"
            value={postCode.Title}
            onChange={(e) =>
              setPostCode((prevState: any) => {
                return {
                  ...prevState,
                  Title: e.target.value,
                };
              })
            }
          />
          <Input
            placeholder="Drescricao do seu Projeto"
            value={postCode.Description}
            className="h-20"
            onChange={(e) =>
              setPostCode((prevState: any) => {
                return {
                  ...prevState,
                  Description: e.target.value,
                };
              })
            }
          />
        </div>
      </Menu>
      <Menu Title="PERSONALIZACAO">
        <div className="flex flex-col gap-4">
          <select
            className="bg-white/[0.16] hover:bg-white/[0.24] h-14 gap-2 p-4 rounded-lg outline-none"
            onChange={(e) =>
              setPostCode((prevState: any) => {
                return {
                  ...prevState,
                  Language: e.target.value,
                };
              })
            }
          >
            <option className="bg-[#051d3b]" value="typescript">
              Javascript
            </option>
            <option className="bg-[#051d3b]" value="xml">
              HTML
            </option>
            <option className="bg-[#051d3b]" value="css">
              CSS
            </option>
          </select>
          <Input
            type="color"
            defaultValue="#0058ff"
            className="py-1 px-2 outline-none"
            onChange={(e) =>
              setPostCode((prevState: any) => {
                return {
                  ...prevState,
                  BgColor: e.target.value,
                };
              })
            }
          />
        </div>
      </Menu>
      <Button
        Title="Salvar projeto"
        className=""
        onClick={(event) => handleSaveProject(event)}
      />
    </form>
  );
}
