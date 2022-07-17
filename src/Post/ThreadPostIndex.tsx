import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

interface APIResponce {
  threadId: string;
  title: string;
  posts: { id: string; post: string }[];
}

const ThreadPostIndex = () => {
  const { threadId } = useParams();
  const [threadPosts, setThreadPosts] = useState<APIResponce | undefined>(
    undefined
  );

  useEffect(() => {
    const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=10`;
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
            return <div key={post.id}>{post.post}</div>;
          })}
      </div>
      <div>
        <Button component={Link} to={`/thread/new/${threadId}`}>
          投稿する
        </Button>
      </div>
    </>
  );
};

export { ThreadPostIndex };
