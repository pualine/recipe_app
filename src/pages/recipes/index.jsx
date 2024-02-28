import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";
import emptyIcon from "../../assets/empty.svg";
import LoadingIcon from "../../assets/fade-stagger-circles.svg";
import "./index.css";
import { Link } from "react-router-dom";

export default function Recipes() {
  // store recipe
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeword] = useState("");
  const [loading, setloading] = useState(false);

  const getRecipes = () => {
    setloading(true);
    //  initial step
    // Prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append(
      "apiKey",
      process.env.REACT_APP_SPOONACULAR_API_KEY
    );
    // url.searchParams.append('number', 6);
    url.searchParams.append("query", keyword);

    // Get Recipe from API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //  Update recicpe
        setRecipes(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setloading(false));
  };

  useEffect(getRecipes, [keyword]);

  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search for recipe and hit enter"
        variant="outlined"
        onKeyDown={(event) =>
          event.key === "Enter" && setKeword(event.target.value)
        }
      />

      <Grid container spacing={3}>
        {loading ? (
          <img src={LoadingIcon} className="LoadingIcon" />
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={4}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardActionArea sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "100%" }}>
                    <Link to={`/recipes/${recipe.id}`}>
                      {" "}
                      <Typography gutterBottom variant="h5" component="div">
                        {recipe.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <img src={emptyIcon} width="50%" className="emptyIcon" />
        )}
      </Grid>
    </Container>
  );
}

// export default index
