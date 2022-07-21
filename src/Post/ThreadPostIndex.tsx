import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { ThreadPostNew } from "./ThreadPostNew";

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
    const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=20`;
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
  // const onNewThread = () => {
  //   const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
  //   axios
  //     .get(threadPostUrl, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: {},
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setThreadPosts(res.data);
  //     });
  // };
  return (
    <>
      <div className="posts-section">
        <Container maxWidth="sm">
          <div className="post-card-section">
            <Typography gutterBottom variant="h4" component="div">
              投稿一覧
            </Typography>
            {threadPosts &&
              threadPosts.posts.map((post) => {
                return (
                  <div>
                    <Card className="post-card">
                      <CardContent>
                        <div key={post.id}>{post.post}</div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            <div>
              <ThreadPostNew
                onNewThread={() => {
                  const threadPostUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=20`;
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
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export { ThreadPostIndex };
