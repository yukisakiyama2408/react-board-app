import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// type ThreadPost = {
//   threadId: string;
//   id: string;
//   post: string;
// };

const ThreadPostIndex = () => {
  const { threadId } = useParams();
  console.log(threadId);
  const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
  const [threadPosts, setThreadPosts] = useState<Array<any>>([]);

  useEffect(() => {
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
  }, [threadId, threadPostUrl]);
  return (
    <>
      <div>aaa</div>
      <div>
        {threadPosts.map((posts) => {
          return (
            <>
              <div key={posts.id}>{posts.post}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { ThreadPostIndex };
