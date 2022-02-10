// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "Post") {
    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.tdm0q.mongodb.net/products?retryWrites=true&w=majority"
    );
    const db = client.db();
    const products = db.collection("products");
    const allProducts = await products.find();
    console.log(allProducts);

    client.close();
    res.status(201).json({ name: "John Doe" });
  }
}
