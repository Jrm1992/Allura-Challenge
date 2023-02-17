import CodeCards from "./CodeCards";
import { useGetData } from "./useGetData";

export default function Community() {
  const { data } = useGetData();
  return (
    <div className="grid lg:grid-cols-2 gap-6 m-auto">
      {data?.map((data) => {
        return (
          <CodeCards
            key={data.id}
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
