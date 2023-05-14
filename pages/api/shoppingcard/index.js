//import dbConnect from "@/lib/dbConnect";
//import ShoppingCard from "@/models/Shoppingcard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(req, res) {
  //await dbConnect();
  const session = await getServerSession(req, res, authOptions);
  console.log("--------> IN API ROUTE", session);
  if (req.method === "POST") {
    try {
      const data = req.body;
      //const shoppingCard = new ShoppingCard(data);
      //await shoppingCard.save();

      res.status(200).json({ status: "angekommen", data: data });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
