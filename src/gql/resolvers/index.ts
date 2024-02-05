import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent: any, args: { productID: string }, context: any) => {
            const result = db.products.find(pd => pd.id === args.productID)
            return result
        },
        categories: () => db.categories,
        category: (parent: any, args: { categoryId: string }, context: any) => {
            return db.categories.find(cd => cd.id === args.categoryId);

        }
    },
    Product: {
        category: (parent: any, args, context: any) => {
            const result = db.categories.find(category => category.id === parent.categoryId);
            return result
        }
    },
    Category: {
        products: (parent: any, args, context: any) => {
            return db.products.filter(Item=>Item.categoryId === parent.id);
        }
    }
};
