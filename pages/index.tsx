import { Button, Grid, Typography } from "@mui/material";
import type { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { data } from "../data";
import { ProductType } from "../interfaces/dataType";
import GridItem from "../components/products/GridItem";
import ThemeUpdater from "../components/ThemeUpdater";

function Home({ products }: { products: ProductType[] }) {
  console.log(products);
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((item) => {
          return <GridItem key={item.name} products={item}></GridItem>;
        })}
      </Grid>
    </div>
  );
}
Home.getLayout = function getLayout(page: typeof Home) {
  return <Layout>{page}</Layout>;
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
