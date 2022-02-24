import dynamic from 'next/dynamic';
import { Typography } from '@mui/material';

const DynamicComponent = dynamic(() => import('../components/Reduced'), {
  ssr: false,
});

const Cart = () => (
  // const removeItemHandler = (item: Character) => {
  //   dispatch({ type: 'REMOVE', payload: item.id });
  // };
  // const updateCartHandler = () => {
  //   console.log('nepal');
  // };
  <div>
    <Typography component="h1" variant="h1">
      Shopping Cart
    </Typography>
    <DynamicComponent />
  </div>
);
// Cart.getLayout = function getLayout(page: typeof Cart) {
//   return <Layout>{page}</Layout>;
// };

// export default dynamic(() => Promise.resolve(Cart), { ssr: false });

// export default dynamic(() => export(Cart), { ssr: false });
export default Cart;
