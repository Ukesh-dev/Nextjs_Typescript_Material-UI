import { Typography, Grid, List, ListItem, Card, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { data } from "../../data";
import Head from "next/head";
import styled from "@emotion/styled";

const ProductSection = styled.div`
  margin-block: 0.5rem;
`;
const ProductHead = styled.div`
  margin-block: 1rem;
`;

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div>Product not Fount</div>;
  }
  return (
    <>
      <Head>
        <title>{product.name}</title>
        {product.description && (
          <meta name="description" content={product.description}></meta>
        )}
      </Head>
      <ProductSection>
        <ProductHead>
          <Link href="/">
            <Typography
              component="a"
              variant="h6"
              color="secondary"
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              Back to products
            </Typography>
          </Link>
        </ProductHead>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
              priority={true}
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
                <Typography variant="h6">
                  Category: {product.category}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">Brand : {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="h6">
                  Description:{product.description}
                </Typography>
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
                        {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth variant="contained" color="primary">
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
