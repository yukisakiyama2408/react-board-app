import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
import { Controller } from "react-hook-form";

const theme = createTheme();

const ThreadPostNew = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
    shouldFocusError: false,
  });

  const { threadId } = useParams();

  const onSubmit = (data: any) => {
    const urlPostApi = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
    axios
      .post(urlPostApi, {
        post: data.post,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/thread/${threadId}`);
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
            <Typography component="h1" variant="h5">
              投稿作成
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="post"
                    control={control}
                    rules={{
                      required: "入力必須です。",
                      maxLength: {
                        value: 30,
                        message: "30文字以下で入力してくださいね！",
                      },
                    }}
                    render={({
                      field: { onBlur, onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        label="投稿"
                        required
                        fullWidth
                        value={value}
                        variant="outlined"
                        margin="normal"
                        onChange={onChange}
                        onBlur={onBlur}
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
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
