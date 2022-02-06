import { Button, Grid, Typography } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { data } from "../data";
import { ProductType } from "../interfaces/dataType";
import GridItem from "../components/products/GridItem";

const Home = ({ products }: { products: ProductType[] }) => {
  return (
    <Layout>
      <div>
        <Typography variant="h3">Products</Typography>
        <Grid container spacing={3}>
          {products.map((item) => {
            return <GridItem key={item.name} products={item}></GridItem>;
          })}
        </Grid>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const { products } = data;
  console.log(data);
  console.log(products);
  return {
    props: { products },
  };
};

export default Home;
