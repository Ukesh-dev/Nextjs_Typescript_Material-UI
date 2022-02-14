import Link from 'next/link';
import dynamic from 'next/dynamic';
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
import Layout from '../components/Layout';
import { useGlobalContext } from '../context';
import { Character } from '../interfaces/dataType';
import imageLoader from '../imageLoader';
import NewLayout from '../components/NewLayout';

const DynamicComponent = dynamic(() => import('../components/Reduced'), {
  ssr: false,
});

const Cart = () => {
  const value = useGlobalContext();
  const { state, dispatch } = value;
  const { cart, darkmode } = state;
  console.log(cart);
  console.log(darkmode);

  // const removeItemHandler = (item: Character) => {
  //   dispatch({ type: 'REMOVE', payload: item.id });
  // };
  // const updateCartHandler = () => {
  //   console.log('nepal');
  // };
  return (
    <div>
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      <DynamicComponent />
    </div>
  );
};
// Cart.getLayout = function getLayout(page: typeof Cart) {
//   return <Layout>{page}</Layout>;
// };

// export default dynamic(() => Promise.resolve(Cart), { ssr: false });

// export default dynamic(() => export(Cart), { ssr: false });
export default Cart;
