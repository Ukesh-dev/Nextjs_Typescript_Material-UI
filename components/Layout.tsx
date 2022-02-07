import Navbar from "./navbar/Navbar";
import Head from "next/head";
import { Container } from "@mui/material";
import useStyles from "../utils/styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const classes = useStyles(); //! Passing as Props
  // const { navbar } = useStyles(); //! Passing as Object
  return (
    <>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <Navbar></Navbar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
