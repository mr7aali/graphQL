import { db } from "../../db.js";

export const resolvers = {
    Query: {
      products: () => db.products,
      product: (parent, args: { productID: string }, context) => {
        const result = db.products.find(pd => pd.id === args.productID)
        return result
      }
    },
  };
  