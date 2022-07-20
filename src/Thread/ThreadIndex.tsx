import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ThreadIndex = () => {
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
      <div className="thread-section">
        <Container maxWidth="sm">
          <div className="thread-card-section">
            <Typography gutterBottom variant="h4" component="div">
              スレッド一覧
            </Typography>
            {threads.map((data) => {
              return (
                <div>
                  <Card key={data.id} className="index-card">
                    <CardActionArea component={Link} to={`/thread/${data.id}`}>
                      <CardContent>
                        <div>{data.title}</div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
            <div className="add-btn">
              <Button
                component={Link}
                to={"/thread/new"}
                variant="contained"
                endIcon={<AddIcon />}
              >
                スレッド作成
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export { ThreadIndex };
