import { Product } from "../model/products";

const resolvers = {
  Query: {
    /// read
    products: async () => {
      return await Product.find();
    },

    // create

    // delete
  },

  Mutation: {},
};

export { resolvers };
