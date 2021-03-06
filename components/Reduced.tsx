import Link from 'next/link';
import Image from 'next/image';
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
// import Layout from '../components/Layout';
import { useGlobalContext } from '../context';
import { Character, CharacterWithPrice } from '../interfaces/dataType';
import imageLoader from '../imageLoader';
// import NewLayout from '../components/NewLayout';

const Reduced = () => {
  const { state, dispatch } = useGlobalContext();
  const { cart } = state;
  // console.log(darkmode);

  const removeItemHandler = (item: Character) => {
    dispatch({ type: 'REMOVE', payload: item.id });
  };
  const updateCartHandler = async (
    item: Character,
    productQuantity: string | number
  ) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${item.id}`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: CharacterWithPrice = await res.json();
    const newQuantity: number =
      typeof productQuantity === 'string'
        ? parseInt(productQuantity)
        : productQuantity;

    // const newQuantity = Number(quantity);
    console.log(typeof newQuantity);

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...data, quantity: newQuantity, price: item.id * 100 },
    });
  };
  return (
    <>
      {cart.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <Grid container spacing={1} alignItems="center">
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* {console.log(cart)} */}
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <Link href={`/product/${item.id}`} passHref>
                        <TableCell>
                          <Image
                            loader={imageLoader}
                            unoptimized
                            src={item.image}
                            alt={item.image}
                            width={50}
                            height={50}
                          />
                        </TableCell>
                      </Link>

                      <TableCell>
                        <Link href={`/product/${item.id}`} passHref>
                          <Typography>{item.name}</Typography>
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {Array.from({ length: 20 }, (_, index) => (
                            <MenuItem key={index + 1} value={index + 1}>
                              {index + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cart.reduce((a, c) => a + c.quantity, 0)} items)
                    : $
                    {cart.reduce(
                      (a, c: CharacterWithPrice) => a + c.quantity * c.price,
                      0
                    )}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    // onClick={checkoutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
              >
                Clear Cart
              </Button>
            </Card>
          </Grid>
        </Grid>
      )}
      {/* </div> */}
    </>
  );
};

export default Reduced;
