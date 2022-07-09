import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type ThreadPost = {
  id: string;
  post: string;
};

const ThreadPostIndex = () => {
  const { threadId } = useParams();
  const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/${threadId}`;

  const [threadPosts, setThreadPosts] = useState<ThreadPost | null>(null);

  useEffect(() => {
    axios
      .get(threadPostUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        setThreadPosts(res.data);
      });
  }, [threadId]);
  return (
    <>
      <div>aaa</div>
    </>
  );
};

export { ThreadPostIndex };
