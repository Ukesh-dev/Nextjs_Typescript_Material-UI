import {
  Typography,
  Grid,
  List,
  ListItem,
  Card,
  Button,
  styled,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// import styled from "@emotion/styled";

import { GetStaticPaths } from 'next';
import { CharacterType, CharacterWithPrice } from '../../interfaces/dataType';
import imageLoader from '../../imageLoader';

const ProductSection = styled('div')(({ theme }) => ({
  marginBlock: '0.5rem',
  [theme.breakpoints.up('md')]: {},
}));
// const Search = styled()
const ProductHead = styled('div')`
  margin-block: 1rem;
`;

export default function ProductScreen({
  product,
}: {
  product: CharacterWithPrice;
}) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const product = data.products.find((a) => a.slug == slug);
  // if (!product) {
  //   return <div>Product not Found</div>;
  // }
  return (
    <>
      <Head>
        <title>{product.name}</title>
        {product && <meta name="description" content={product.name} />}
      </Head>
      <ProductSection>
        <ProductHead>
          <Link href="/" passHref>
            <Typography
              component="a"
              variant="h6"
              sx={{
                '&:hover': { cursor: 'pointer' },
              }}
            >
              Back to products
            </Typography>
          </Link>
        </ProductHead>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Image
              loader={imageLoader}
              unoptimized
              src={product.image}
              alt={product.name}
              width="400px"
              height="450px"
              priority
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <List>
              <ListItem>
                <Typography variant="h1" component="h1">
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">Category: {product.gender}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Brand : {product.origin.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Rating: {product.species} stars ({product.price} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">Description:{product.name}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Status</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>
                        {product.id > 0 ? 'In Stock' : 'Out of stock'}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth variant="contained" color="secondary">
                    Add to Cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </ProductSection>
    </>
  );
}
// const getLayout = (page: typeof ProductScreen) => {
//   return <Layout>{page}</Layout>;
// };
// ProductScreen.getLayout = function getLayout(page: typeof ProductScreen) {
//   return <Layout>{page}</Layout>;
// };

// ProductScreen.getLayout = (page: typeof ProductScreen) => {
//   return <NewLayout>{page}</NewLayout>;
// };

export const getStaticPaths: GetStaticPaths = async () => {
  async function api<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request);
    const body = (await response.json()) as Promise<T>;
    return body;
  }
  const { results } = await api<CharacterType>(
    'https://rickandmortyapi.com/api/character'
  );
  // newResults.forEach((topic) => {});
  return {
    paths: results.map((character) => ({
      params: { slug: String(character.id) },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.slug}`
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dataa = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const newData = { ...dataa };

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      product: newData,
    },
    revalidate: 3600,
  };
};

// export const getServerSideProps = async ({
//   params,
// }: {
//   params: { slug: string };
// }) => {
//   const { slug } = params;
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${slug}`);
//   const data = await res.json();

//   const newData = { ...data, price: data.id * 100 };
//   return {
//     props: {
//       product: newData,
//     },
//   };
// };
