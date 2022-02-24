import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Card,
  CardActionArea,
  Grid,
  Button,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import { CharacterWithPrice } from '../../interfaces/dataType';
import imageLoader from '../../imageLoader';
import { useGlobalContext } from '../../context';
// import useStyles from "../../utils/styles";
const ButtonStyled = styled(Button)`
  /* &:hover {
    background-color: #7e6e6e;
  } */
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;
// const item = {
//   countInStock: 100,
// };
// console.log([...Array(item.countInStock).keys()].map((x: number) => x + 1));
// console.log(Array.from(Array(item.countInStock).keys()).map((x) => x + 1));
// console.log(Array.from(Array(item.countInStock).keys()).map((x) => x + 1));

const GridItem = ({ products }: { products: CharacterWithPrice }) => {
  const { state, dispatch } = useGlobalContext();
  const router = useRouter();
  const addToCart = async (product: CharacterWithPrice) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: CharacterWithPrice = await fetch(
      `https://rickandmortyapi.com/api/character/${product.id}`
    ).then((res) => res.json());
    const existItem = state.cart.find((item) => item.id === products.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const price = data.id * 100;
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...data, quantity, price },
    });
    router.push('/cart');
  };
  return (
    // const classes = useStyles();
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
        aria-label="options"
        sx={{ backgroundColor: 'var(--cardbg)' }}
      >
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
                layout="fill"
                priority
                unoptimized
                alt={products.name}
                src={products.image}
                // objectFit="cover"
              />
              {/* </CardMedia> */}
            </ImageWrapper>
            {/* </div> */}
            <CardContent>
              <Typography>{products.name}</Typography>
            </CardContent>
            {/* </a> */}
          </CardActionArea>
        </Link>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography variant="subtitle1">${products.price}</Typography>
          <ButtonStyled
            size="medium"
            color="secondary"
            variant="contained"
            onClick={() => addToCart(products)}
          >
            Add to Cart
          </ButtonStyled>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GridItem;
