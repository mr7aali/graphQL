import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';


const typeDefs = `#graphql
  
type Product{
        id:ID!  
        name:String
        image:String
        description:String
        price:Float
        quantity:Int
        onStock:Boolean
        categoryId:String
}

type Query{
  products:[Product]
  product(productID:ID!):Product
}

 
`;


const resolvers = {
  Query: {
    products:()=>db.products,
    product:(parent,args:{productID:string},context)=>{
      const result = db.products.find(pd=>pd.id ===args.productID)
      return result
    }
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);