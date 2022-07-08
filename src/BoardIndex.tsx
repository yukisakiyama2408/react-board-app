import axios from "axios";
import { useEffect, useState } from "react";

const BoardIndex = () => {
  const [threads, setThreads] = useState<Array<any>>([]);
  const BoardIndexApi =
    "https://railway-react-bulletin-board.herokuapp.com/threads";

  useEffect(() => {
    axios
      .get(BoardIndexApi, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        console.log(res.data);
        setThreads(res.data);
      });
  }, []);
  return (
    <>
      {threads.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.title}</div>
          </div>
        );
      })}
    </>
  );
};

export { BoardIndex };
