// import { MongoClient } from 'mongodb';
import { styled, Grid, Typography } from '@mui/material';
import type { GetStaticProps } from 'next';
// import { styled } from '@mui/material';
import Layout from '../components/Layout';
import {
  CharacterType,
  CharacterWithPrice,
  // ProductType,
} from '../interfaces/dataType';
import GridItem from '../components/products/GridItem';
// import { css } from "@emotion/react";
// import ThemeUpdater from "../components/ThemeUpdater";
// import styled from "@emotion/styled";
// import { theme } from "../theme";
const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.between('xs', 'sm')]: {
    padding: '2rem',
  },
}));

function Home({
  character,
}: {
  // products: ProductType[];
  character: CharacterWithPrice[];
}) {
  // const newCharacter: CharacterWithPrice[]= character.map((item) => ({
  //   ...item,
  //   price: Math.ceil(8 * Math.random()) * 100,
  // }));
  // if(type of window !== 'undefined'){
  //   localStorage.getItem('cartItems')
  // }
  //! Only Efficient for small amount of arrays
  const newCharacter = character;
  // const newCharacter = character
  //   .map((value) => ({ value, sort: Math.random() }))
  //   .sort(
  //     (a, b) =>
  //       a.sort - b.sort
  //   )
  //   .map(({ value }) => value);
  //!------------------------
  // most effiecient
  // const shuffle: <T>(array: T[]) => T[] = (array) => {
  //   let currentIndex: number = array.length;
  //   let randomIndex: number;
  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }

  //   return array;
  // };
  // const newCharacter = shuffle<CharacterWithPrice>(character);

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
        {newCharacter.map((item) => (
          <GridItem key={item.id} products={item} />
        ))}
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
  // client.close();
  //! Need to make a async or fetch wrapper
  // ! const res = await fetch('https://rickandmortyapi.com/api/character');
  // ! const { results }: CharacterType = await res.json();
  // console.log(results);
  // const characters: NewCharacterType[] = results.map((character) => ({
  //   ...characters,
  //   price: 100 * character.id,
  // }));

  async function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log('There is an error');
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
        // return response.json();
      })
      .then((datas) => datas);
  }
  const { results } = await api<CharacterType>(
    'https://rickandmortyapi.com/api/character'
  );
  const shuffle: <T>(array: T[]) => T[] = (array) => {
    let currentIndex: number = array.length;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  const characterWithPrice = results.map((character) => ({
    ...character,
    price: character.id * 100,
    quantity: 0,
  }));
  const newCharacter = shuffle<CharacterWithPrice>(characterWithPrice);

  // ! Can't do this after the fetch as it says unsafe assingment;;;
  // const { products } = data;

  return {
    props: {
      // characters: newResults.map((character) => ({
      //   ...character,
      //   price: 100 * character.id,
      // })),
      character: newCharacter,
    },
  };
};

export default Home;
