import { useEffect, useState } from "react";

import { db } from "../../config/firebase";

import { collection, getDocs } from "firebase/firestore";

export type DataProps = {
  Code: string;
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
};

export const useGetData = () => {
  const [data, setData] = useState<[DataProps]>();
  const [filters, setFilters] = useState<string[]>([
    "javascript",
    "css",
    "html",
  ]);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "Codes"));
    setData(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as any
    );
  }

  const dataFiltered = filters.map((filter) =>
    data?.filter((item) => item.Language === filter)
  );

  console.log(dataFiltered);

  useEffect(() => {
    getData();
  }, []);

  return { data };
};
