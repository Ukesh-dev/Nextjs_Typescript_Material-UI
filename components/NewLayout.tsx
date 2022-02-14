import { Container } from '@mui/material';
import { ReactNode } from 'react';

const NewLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <h2>Navbar</h2>
    <Container>{children}</Container>
  </div>
);
export default NewLayout;
