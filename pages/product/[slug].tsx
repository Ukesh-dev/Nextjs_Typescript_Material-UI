import { Typography } from "@mui/material";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { data } from "../../data";
import Head from "next/head";

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
      </Head>
      <div>
        <Link href="/">
          <a>Back to products</a>
        </Link>
        <Typography variant="h2">{slug}</Typography>
      </div>
    </>
  );
}
ProductScreen.getLayout = function getLayout(page: typeof ProductScreen) {
  return <Layout>{page}</Layout>;
};
