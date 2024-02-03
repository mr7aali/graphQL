export const typeDefs = `#graphql
  
type Product{
        id:ID!  
        name:String
        image:String
        description:String
        price:Float
        quantity:Int
        onStock:Boolean
        category:Category
}

type Category{
    id:ID!
    name:String
}


type Query{
  products:[Product]
  product(productID:ID!):Product
  categories:[Category]
  category(categoryId:ID!):Category
}

 
`;