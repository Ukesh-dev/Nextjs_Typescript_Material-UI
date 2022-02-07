import Link from "next/link";
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
import styled from "@emotion/styled";
import { ProductType } from "../../interfaces/dataType";
// import useStyles from "../../utils/styles";
const ButtonStyled = styled(Button)`
  &:hover {
    background-color: #7e6e6e;
  }
`;

const GridItem = ({ products }: { products: ProductType }) => {
  // const classes = useStyles();
  return (
    <Grid
      item
      md={3}
      // className={classes.navbar}
    >
      <Card variant="outlined">
        <Link href={`/product/${products.slug}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={products.image}
              title={products.name}
            ></CardMedia>
            <CardContent>
              <Typography>{products.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1">${products.price}</Typography>
          <ButtonStyled
            size="medium"
            sx={{ color: "#fff", backgroundColor: "#102030" }}
          >
            Add to Cart
          </ButtonStyled>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
