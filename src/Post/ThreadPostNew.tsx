import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  CssBaseline,
  Grid,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

type FormProps = {
  post: string;
};

const theme = createTheme();

const ThreadPostNew = (props: any) => {
  const { threadId } = useParams();

  const handleSubmit = (data: any) => {
    const urlPostApi = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
    axios
      .post(urlPostApi, {
        post: data.post,
      })
      .then(function (response) {
        console.log(response);
        props.onNewThread();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="post"
                    label="投稿"
                    required
                    fullWidth
                    value={props.threadPosts}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                投稿する
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export { ThreadPostNew };
