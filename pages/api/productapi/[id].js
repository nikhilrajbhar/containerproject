import Product from "../../../models/product";
import initDB from "../../../helpers/initDB";

initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res)
      break
    case "DELETE":
      await saveProduct(req, res)
      break
  }
}


const getProduct = async (req, res) => {
  try {
  const { id } = req.query
    const products = await Product.findOne({ _id: id });
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }

}

const saveProduct = async (req, res) => {
    res.status(200).json("failed to update")
}


