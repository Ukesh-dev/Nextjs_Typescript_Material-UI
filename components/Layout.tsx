import Navbar from "./navbar/Navbar";
import Head from "next/head";
import { Container } from "@mui/material";
import useStyles from "../utils/styles";

const Layout = ({ children }: { children: JSX.Element }) => {
  const classes = useStyles(); //! Passing as Props
  const { navbar } = useStyles(); //! Passing as Object
  return (
    <>
      <Head>
        <title>Next Amazon</title>
      </Head>
      <Navbar navbar={navbar} navFunc={classes}></Navbar>
      <Container className={classes.main}>{children}</Container>
    </>
  );
};

export default Layout;
