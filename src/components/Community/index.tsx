import { useEffect, useState } from "react";

import { db } from "../../config/firebase";
import CodeCards from "./CodeCards";

import { collection, getDocs } from "firebase/firestore";

export default function Community() {
  const [data, setData] = useState<any>([]);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "Codes"));
    setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-6 m-auto">
      {data.map((data, i) => {
        return (
          <CodeCards
            key={i}
            Author={data.Author}
            BgColor={data.BgColor}
            Description={data.Description}
            Language={data.Language}
            Title={data.Title}
            Likes={data.Likes}
            id={data.id}
          >
            {data.Code}
          </CodeCards>
        );
      })}
    </div>
  );
}
