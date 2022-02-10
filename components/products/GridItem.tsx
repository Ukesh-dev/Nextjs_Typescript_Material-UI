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
import { CharacterWithPrice, ProductType } from "../../interfaces/dataType";
import Image from "next/image";
import imageLoader from "../../imageLoader";
// import useStyles from "../../utils/styles";
const ButtonStyled = styled(Button)`
  /* &:hover {
    background-color: #7e6e6e;
  } */
`;
const ImageWrapper = styled.div`
  position: relative;
  width: "100%";
  aspect-ratio: 1;
`;

const GridItem = ({ products }: { products: CharacterWithPrice }) => {
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
      <Card variant="outlined" aria-label="options">
        <Link href={`/product/${products.id}`} passHref>
          <CardActionArea>
            {/* <div   //! Need to fix using pragma orElse it shows [object object] error 
              css={css`
                position: relative;
                width: "100%";
                aspect-ratio: 1;
              `}
            > */}
            <ImageWrapper>
              {/* <a> */}
              {/* <CardMedia
              component="img"
              title={products.name}
              src={products.image}
            > */}
              <Image
                loader={imageLoader}
                unoptimized
                layout="fill"
                alt={products.name}
                src={products.image}
                objectFit="cover"
              ></Image>
              {/* </CardMedia> */}
            </ImageWrapper>
            {/* </div> */}
            <CardContent>
              <Typography>{products.name}</Typography>
            </CardContent>
            {/* </a> */}
          </CardActionArea>
        </Link>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="subtitle1">${products.price}</Typography>
          <ButtonStyled size="medium" color="secondary" variant="contained">
            Add to Cart
          </ButtonStyled>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
