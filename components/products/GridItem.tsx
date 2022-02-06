import {
  Card,
  CardActionArea,
  Grid,
  Button,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
import { ProductType } from "../../interfaces/dataType";
import useStyles from "../../utils/styles";

const GridItem = ({ products }: { products: ProductType }) => {
  const classes = useStyles();
  return (
    <Grid item md={3} xs={12} sm={6}>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            image={products.image}
            title={products.name}
            className={classes.images}
          ></CardMedia>
          <CardContent>
            <Typography>{products.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="subtitle1">{products.price}</Typography>
          <Button size="large" className={classes.button}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
