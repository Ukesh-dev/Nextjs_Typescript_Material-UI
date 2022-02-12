import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { useGlobalContext } from '../context';

const NewLayout = ({ children }: { children: ReactNode }) => {
  const { state } = useGlobalContext();
  console.log(state);
  return (
    <div>
      <h2>Navbar</h2>
      <Container>{children}</Container>
    </div>
  );
};
export default NewLayout;
