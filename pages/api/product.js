import Product from "../../models/product";
import initDB from '../../helpers/initDB'

initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getallProducts(req, res)
      break
    case "POST":
      await saveProduct(req, res)
      break
    case "PUT":
      await updateProduct(req, res)
      break
  }
}


const getallProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}

const saveProduct = async (req, res) => {

  const { productName, productImage } = req.body
  try {
    const newUser = await new Product({
      productName,
      productImage
    }).save()
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
  }
}

const updateProduct = async (req, res) => {
  try {
    const { _id, productName, productImage} = req.body;
    var options = { new: true }
    const products = await Product.findOneAndUpdate(
      { _id: _id },
      { $set: { productName: productName, productImage: productImage}},
      options
    )
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
  }
}

