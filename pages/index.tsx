import { MongoClient } from "mongodb";
import { Button, Grid, Typography } from "@mui/material";
import type { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { data } from "../data";
import {
  CharacterType,
  CharacterWithPrice,
  ProductType,
} from "../interfaces/dataType";
import GridItem from "../components/products/GridItem";
import { css } from "@emotion/react";
import ThemeUpdater from "../components/ThemeUpdater";
// import styled from "@emotion/styled";
import { styled } from "@mui/material";
// import { theme } from "../theme";
const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    padding: "2rem",
  },
}));

function Home({
  products,
  character,
}: {
  products: ProductType[];
  character: CharacterWithPrice[];
}) {
  // console.log(character);
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
      <GridStyled
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {character.map((item) => {
          return <GridItem key={item.id} products={item}></GridItem>;
        })}
      </GridStyled>
    </div>
  );
}
Home.getLayout = function getLayout(page: typeof Home) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  // const client = await MongoClient.connect(
  //   "mongodb+srv://admin:admin@cluster1.tdm0q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  // );
  // const db = client.db();
  // const productsCollection = db.collection("products");
  // const productsMongo = await productsCollection.find().toArray();
  // console.log(productsMongo);
  // client.close();
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: CharacterType = await res.json();
  // console.log(results);
  const character = results.map((character, index) => {
    return { ...character, price: 100 * character.id };
  });
  const { products } = data;

  return {
    props: { products, character },
  };
};

export default Home;
