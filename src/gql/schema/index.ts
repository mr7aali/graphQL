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
        reviews:[Review]
}

type Category{
    id:ID!
    name:String
    products:[Product]
}

type Review{
  id:ID!
  review:String
  rating:Float
  data:String
  productId:String
}


type Query{
  products:[Product]
  product(productID:ID!):Product
  categories:[Category]
  category(categoryId:ID!):Category
}

 
`;