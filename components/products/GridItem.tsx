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
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ProductType } from "../../interfaces/dataType";
import Image from "next/image";
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
      xs={12}
      sm={6}
      md={4}
      lg={3}
      // className={classes.navbar}
    >
      <Card
        variant="outlined"
        css={css`
          background-color: var(--navbar-bg);
        `}
      >
        <Link href={`/product/${products.slug}`} passHref>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              title={products.name}
              src={products.image}
            > */}
            <Image
              width="400px"
              height="400px"
              alt={products.name}
              src={products.image}
              className="custom-img"
              objectFit="contain"
              priority
            ></Image>
            {/* </CardMedia> */}
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
