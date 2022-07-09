import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Card, CardContent } from "@mui/material";
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
      <Container>
        {threads.map((data) => {
          return (
            <div>
              <div key={data.id} className="card-section">
                <Card className="index-card">
                  <CardContent>
                    <div>{data.title}</div>
                  </CardContent>
                </Card>
              </div>
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
            スレッドを作成する
          </Button>
        </div>
      </Container>
    </>
  );
};

export { ThreadIndex };
