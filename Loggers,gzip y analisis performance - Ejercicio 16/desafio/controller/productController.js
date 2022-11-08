import { createNFakeProducts } from "../models/mocks/index.js";
const { errorLogger } = require("../src/utils/loggers");

export const productController = {
  getData: async (req, res) => {
    try {
      let products = await createNFakeProducts(5);
      if (products.length > 0) {
        res.render("pages/products", {
          products: products,
          productsExist: true,
        });
      } else {
        res.render("pages/products", {
          products: products,
          productsExist: false,
        });
      }
    } catch (e) {
      res.status(500).send({ error });
    }
  },
};
