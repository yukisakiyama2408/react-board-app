import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";

interface APIResponce {
  threadId: string;
  title: string;
  posts: { id: string; post: string }[];
}

const ThreadPostIndex = () => {
  const { threadId } = useParams();
  console.log(threadId);
  const [threadPosts, setThreadPosts] = useState<APIResponce | undefined>(
    undefined
  );

  useEffect(() => {
    const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
    axios
      .get(threadPostUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      })
      .then((res) => {
        console.log(res.data);
        setThreadPosts(res.data);
      });
  }, [threadId]);
  return (
    <>
      <div>
        {threadPosts &&
          threadPosts.posts.map((post) => {
            return <div>{post.post}</div>;
          })}
      </div>
    </>
  );
};

export { ThreadPostIndex };
