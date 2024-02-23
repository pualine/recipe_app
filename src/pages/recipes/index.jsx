import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Recipes() {
  return (
    <Container sx={{ my: "2rem" }} maxWidth="sm">
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search for recipe and hit enter"
        variant="outlined"
      />

      <Grid Container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://themewagon.github.io/fruitables/img/hero-img-1.png"
            />
          </Card>
          <CardContent>
            <Typography variant="h5">Recipe Name</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
}

// export default index
