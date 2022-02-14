import Head from 'next/head';
import { Container } from '@mui/material';
import Navbar from './navbar/Navbar';
// import useStyles from '../utils/styles';

const Layout = ({ children }: { children: React.ReactNode }) => (
  // const { navbar } = useStyles(); //! Passing as Object
  <>
    <Head>
      <title>Next Amazon</title>
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </>
);
export default Layout;
