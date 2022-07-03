import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const BoardIndex = () => {
  const BoardIndexApi = "techtrain-railway-api.herokuapp.com/threads";
  const [threads, setThreads] = useState<Array<any>>([]);

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
  return;
  <>
    <div>aaa</div>
    {/* {threads.map((data))=>{
    return 
    <div>
        <div>{data.id}</div>
    </div>
  }} */}
  </>;
};

export { BoardIndex };
