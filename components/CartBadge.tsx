import React from 'react';
import { Badge } from '@mui/material';
import { useGlobalContext } from '../context';

const CartBadge = () => {
  const {
    state: { cart },
  } = useGlobalContext();
  return cart.length > 0 ? (
    <Badge sx={{ position: 'absolute' }} badgeContent={cart.length} />
  ) : (
    <span />
  );
};

export default CartBadge;
